import { posts } from '../../../lib/posts';

export async function PUT(
  req: Request,
  { params }: { params: { id: string } },
) {
  const body = await req.json();
  const id = Number(params.id);

  const post = posts.find((p) => p.id === id);

  if (!post) {
    return Response.json({ message: 'Not found' }, { status: 404 });
  }

  post.content = body.content;

  return Response.json(post);
}
