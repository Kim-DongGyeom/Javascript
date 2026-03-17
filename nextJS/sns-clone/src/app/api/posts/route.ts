import { posts } from '../../lib/posts';

export async function GET() {
  return Response.json(posts);
}

export async function POST(req: Request) {
  const body = await req.json();

  const newPost = {
    id: Date.now(),
    content: body.content,
    createdAt: new Date(),
  };

  posts.push(newPost);

  return Response.json(newPost);
}
