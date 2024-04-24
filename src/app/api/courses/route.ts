import data from '../../../../server.json'

export async function GET() {
  return new Response(JSON.stringify(data.courses), { status: 200 })
}
