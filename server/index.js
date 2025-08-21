import express from 'express';
import cors from 'cors';
import pkg from 'pg';
import path from 'path';
import fs from 'fs';
import multer from 'multer';
import { fileURLToPath } from 'url';

const { Pool } = pkg;
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
app.use(cors());
app.use(express.json({ limit: '15mb' }));

// Limit per-profile state size (bytes) to keep DB small
const MAX_STATE_BYTES = parseInt(process.env.MAX_STATE_BYTES || '262144', 10); // 256KB default

const useMemoryStore = !process.env.DATABASE_URL;
let pool = null;
if (!useMemoryStore) {
  pool = new Pool({
    connectionString: process.env.DATABASE_URL,
    ssl: process.env.DATABASE_URL && process.env.NODE_ENV === 'production' ? { rejectUnauthorized: false } : false
  });
}

async function ensureSchema() {
  if (useMemoryStore) return;
  await pool.query(`
    create extension if not exists pgcrypto;
    create table if not exists profiles (
      id uuid primary key default gen_random_uuid(),
      name text not null,
      created_at timestamptz not null default now(),
      updated_at timestamptz not null default now()
    );
    create table if not exists profile_states (
      profile_id uuid primary key references profiles(id) on delete cascade,
      state jsonb not null
    );
  `);
}

// Memory store fallback
const mem = { profiles: new Map(), states: new Map() };

app.get('/api/health', (req, res) => res.json({ ok: true }));

// Redirect root to the editable hotspots page
app.get('/', (req, res) => {
  res.redirect('/projects/hotspots/editable-hotspot.html');
});

app.get('/api/profiles', async (req, res) => {
  if (useMemoryStore) {
    const rows = Array.from(mem.profiles.values()).sort((a,b)=> new Date(b.updated_at)-new Date(a.updated_at));
    return res.json(rows);
  }
  const { rows } = await pool.query('select id, name, created_at, updated_at from profiles order by updated_at desc');
  res.json(rows);
});

app.get('/api/profiles/:id', async (req, res) => {
  const { id } = req.params;
  if (useMemoryStore) {
    const p = mem.profiles.get(id);
    if (!p) return res.status(404).json({ error: 'not_found' });
    return res.json({ ...p, state: mem.states.get(id) });
  }
  const { rows } = await pool.query('select p.id, p.name, p.created_at, p.updated_at, s.state from profiles p left join profile_states s on s.profile_id = p.id where p.id = $1', [id]);
  if (rows.length === 0) return res.status(404).json({ error: 'not_found' });
  res.json(rows[0]);
});

app.post('/api/profiles', async (req, res) => {
  const { name, state } = req.body || {};
  if (!name || !state) return res.status(400).json({ error: 'invalid_payload' });
  try {
    const size = Buffer.byteLength(JSON.stringify(state), 'utf8');
    if (size > MAX_STATE_BYTES) {
      return res.status(413).json({ error: 'state_too_large', maxBytes: MAX_STATE_BYTES, size });
    }
  } catch (_) {
    return res.status(400).json({ error: 'invalid_state' });
  }
  if (useMemoryStore) {
    const id = cryptoRandomId();
    const now = new Date().toISOString();
    const row = { id, name, created_at: now, updated_at: now };
    mem.profiles.set(id, row);
    mem.states.set(id, state);
    return res.status(201).json({ ...row, state });
  }
  const client = await pool.connect();
  try {
    await client.query('begin');
    const ins = await client.query('insert into profiles(name) values($1) returning id, name, created_at, updated_at', [name]);
    const id = ins.rows[0].id;
    await client.query('insert into profile_states(profile_id, state) values($1, $2)', [id, state]);
    await client.query('commit');
    res.status(201).json({ ...ins.rows[0], state });
  } catch (e) {
    await client.query('rollback');
    res.status(500).json({ error: 'db_error' });
  } finally {
    client.release();
  }
});

app.put('/api/profiles/:id', async (req, res) => {
  const { id } = req.params;
  const { name, state } = req.body || {};
  if (state) {
    try {
      const size = Buffer.byteLength(JSON.stringify(state), 'utf8');
      if (size > MAX_STATE_BYTES) {
        return res.status(413).json({ error: 'state_too_large', maxBytes: MAX_STATE_BYTES, size });
      }
    } catch (_) {
      return res.status(400).json({ error: 'invalid_state' });
    }
  }
  if (useMemoryStore) {
    const row = mem.profiles.get(id);
    if (!row) return res.status(404).json({ error: 'not_found' });
    const updated = { ...row, name: name || row.name, updated_at: new Date().toISOString() };
    mem.profiles.set(id, updated);
    if (state) mem.states.set(id, state);
    return res.json({ ...updated, state: mem.states.get(id) });
  }
  const client = await pool.connect();
  try {
    await client.query('begin');
    if (name) await client.query('update profiles set name=$1, updated_at=now() where id=$2', [name, id]);
    if (state) {
      await client.query(`insert into profile_states(profile_id, state) values($1, $2)
        on conflict(profile_id) do update set state=excluded.state`, [id, state]);
    }
    await client.query('commit');
    const { rows } = await client.query('select p.id, p.name, p.created_at, p.updated_at, s.state from profiles p left join profile_states s on s.profile_id = p.id where p.id = $1', [id]);
    res.json(rows[0]);
  } catch (e) {
    await client.query('rollback');
    res.status(500).json({ error: 'db_error' });
  } finally {
    client.release();
  }
});

app.delete('/api/profiles/:id', async (req, res) => {
  const { id } = req.params;
  if (useMemoryStore) {
    mem.profiles.delete(id);
    mem.states.delete(id);
    return res.json({ ok: true });
  }
  await pool.query('delete from profiles where id=$1', [id]);
  res.json({ ok: true });
});

function cryptoRandomId() {
  if (globalThis.crypto?.randomUUID) return crypto.randomUUID();
  return 'p_' + Math.random().toString(36).slice(2) + Date.now().toString(36);
}

// Serve static files
const publicDir = path.join(__dirname, '..');
app.use(express.static(publicDir));

// File uploads (store on Fly volume at /data/uploads)
const uploadRoot = process.env.UPLOAD_DIR || '/data/uploads';
try { fs.mkdirSync(uploadRoot, { recursive: true }); } catch {}
const storage = multer.diskStorage({
  destination: function (req, file, cb) { cb(null, uploadRoot); },
  filename: function (req, file, cb) {
    const ts = Date.now();
    const safe = file.originalname.replace(/[^a-zA-Z0-9._-]/g, '_');
    cb(null, `${ts}-${safe}`);
  }
});
const upload = multer({ storage, limits: { fileSize: 20 * 1024 * 1024 } }); // 20MB max per file

// Expose uploads
app.use('/uploads', express.static(uploadRoot));

app.post('/api/upload', upload.single('file'), (req, res) => {
  if (!req.file) return res.status(400).json({ error: 'no_file' });
  const filename = path.basename(req.file.path);
  const base = process.env.PUBLIC_BASE_URL || '';
  const url = base ? `${base.replace(/\/$/, '')}/uploads/${filename}` : `/uploads/${filename}`;
  return res.json({ url });
});

const port = process.env.PORT || 8080;
ensureSchema().then(() => {
  app.listen(port, () => console.log(`Server listening on ${port}`));
}).catch((e) => {
  console.error('Schema init failed', e);
  process.exit(1);
});


