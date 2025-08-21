export async function autofillTexts(interfaceId: string, fields: { id: string; label: string; value: string; type: string }[]) {
  const res = await fetch('/api/autofill', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ interfaceId, fields }),
  });
  if (!res.ok) {
    throw new Error(`AI autofill failed: ${res.status}`);
  }
  const data = await res.json();
  return (data?.values || {}) as Record<string, string>;
}


