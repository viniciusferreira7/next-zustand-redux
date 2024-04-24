import data from '../../../../../server.json'

import { NextApiRequest } from 'next'

export async function GET(
  request: NextApiRequest,
  { params }: { params: { id: string } },
) {
  const courseId = Number(params.id)

  if (!courseId) {
    return new Response(null, { status: 400 })
  }

  const findCourse = data.courses.find((course) => course.id === courseId)

  if (!findCourse) {
    return new Response(null, { status: 404 })
  }

  return new Response(JSON.stringify(findCourse), { status: 200 })
}
