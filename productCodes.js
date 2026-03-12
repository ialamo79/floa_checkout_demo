
module.exports = async function (context, req) {
  if (req.method === 'OPTIONS') {
    context.res = { status: 204, headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Headers': 'Content-Type, Authorization',
      'Access-Control-Allow-Methods': 'POST, OPTIONS'
    }};
    return;
  }

  const BACKEND = process.env.BACKEND_URL;
  if (!BACKEND) {
    context.res = { status: 500, body: { error: 'BACKEND_URL no configurado' } };
    return;
  }

  try {
    const upstream = new URL('/api/start-payment', BACKEND).toString();
    const body = req.rawBody || JSON.stringify(req.body || {});
    const r = await fetch(upstream, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body
    });
    const text = await r.text();
    context.res = { status: r.status, headers: { 'Content-Type': r.headers.get('content-type') || 'application/json' }, body: text };
  } catch (e) {
    context.res = { status: 502, body: { error: 'Bad Gateway', detail: String(e && e.message || e) } };
  }
}
