import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function PATCH(
  req: Request,
  context: { params: Promise<{ id: string }> },
) {
  const params = await context.params;
  const id = Number(params.id);
  const body = await req.json();

  if (!id) {
    return new Response('Invalid ID', { status: 400 });
  }

  if (!body.title?.trim()) {
    return new Response('Title required', { status: 400 });
  }

  const existing = await prisma.qna.findUnique({
    where: { id },
  });

  if (!existing) {
    return new Response('Not found', { status: 404 });
  }

  const updated = await prisma.qna.update({
    where: { id },
    data: {
      title: body.title,
      content: body.content,
    },
  });

  console.log(updated);

  return Response.json(updated);
}

export async function DELETE(
  req: Request,
  { params }: { params: { id: string } },
) {
  const id = Number(params.id);

  if (!id) {
    return new Response('Invalid ID', { status: 400 });
  }

  await prisma.qna.delete({
    where: { id },
  });

  return Response.json({ message: '削除完了' });
}
