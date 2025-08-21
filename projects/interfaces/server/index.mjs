import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';

const app = express();
app.use(cors());
app.use(bodyParser.json());

const OPENAI_API_KEY = process.env.CHAT_GPT_KEY || process.env.OPENAI_API_KEY || '';
const MODEL = 'gpt-4o-mini-2024-07-18';

app.post('/api/autofill', async (req, res) => {
  try {
    const { interfaceId, fields } = req.body || {};
    if (!OPENAI_API_KEY) {
      return res.status(500).json({ error: 'Missing CHAT_GPT_KEY in .env' });
    }

    const prompt = `You are helping customize UI text for interface ${interfaceId}.\nReturn improved, concise, human-friendly text for each field id. Respond as JSON mapping id->value only.\nFields: ${JSON.stringify(fields)}`;

    const r = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${OPENAI_API_KEY}`,
      },
      body: JSON.stringify({
        model: MODEL,
        messages: [
          { role: 'system', content: 'You write short, clear UI strings.' },
          { role: 'user', content: prompt },
        ],
        temperature: 0.7,
      }),
    });

    const data = await r.json();
    const content = data?.choices?.[0]?.message?.content || '{}';
    let json = {};
    try {
      json = JSON.parse(content);
    } catch {}
    return res.json({ values: json });
  } catch (e) {
    return res.status(500).json({ error: e?.message || 'Unknown error' });
  }
});

const port = process.env.PORT ? Number(process.env.PORT) : 8787;
app.listen(port, () => {
  console.log(`AI server listening on http://localhost:${port}`);
});


