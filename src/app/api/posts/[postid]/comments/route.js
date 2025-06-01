export async function GET(request, { params }) {
  const { postid } = params;
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${postid}/comments`);
  const data = await res.json();
  return Response.json(data);
} 