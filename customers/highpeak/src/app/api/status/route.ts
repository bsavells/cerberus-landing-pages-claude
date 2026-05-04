export const dynamic = 'force-dynamic';
export const revalidate = 0;

const GATEWAY_STATUS_URL = 'https://cerberus.tradewindcontrols.com:8043/StatusPing';

export async function GET() {
  try {
    const res = await fetch(GATEWAY_STATUS_URL, {
      cache: 'no-store',
      signal: AbortSignal.timeout(5000),
    });

    if (!res.ok) {
      return Response.json(
        { state: 'UNREACHABLE', httpStatus: res.status },
        { headers: { 'Cache-Control': 'no-store' } },
      );
    }

    const text = (await res.text()).trim();
    let state = text;
    try {
      const json = JSON.parse(text);
      state = json.state ?? json.status ?? text;
    } catch {
      // plain text response — use as-is
    }

    return Response.json(
      { state: String(state).toUpperCase() },
      { headers: { 'Cache-Control': 'no-store' } },
    );
  } catch {
    return Response.json(
      { state: 'UNREACHABLE' },
      { headers: { 'Cache-Control': 'no-store' } },
    );
  }
}
