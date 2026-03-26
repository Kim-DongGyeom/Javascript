import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function POST(req: Request) {
  const body = await req.json();

  if (!body.title?.trim()) {
    return new Response('Title required', { status: 400 });
  }

  const qna = await prisma.qna.create({
    data: {
      title: body.title,
      content: body.content,
      user_id: 1, // 臨時
    },
  });

  return Response.json(qna);
}

export async function GET() {
  const data = await prisma.qna.findMany({
    select: {
      id: true,
      title: true,
      content: true,
      created_at: true,
    },
    orderBy: { id: 'asc' },
  });

  return Response.json(data);
}
