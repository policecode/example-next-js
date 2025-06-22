export async function GET(request, { params }) {
    const url = request.nextUrl
    const { a } = await params
  return Response.json({ 
    url: url.toString(),
    params: a,
    message: 'Hello World' 
})
}