import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  const result = await prisma.qna.create({
    data: {
      title: '첫 게시글',
      content: '내용 테스트',
    },
  });

  console.log(result);
}

main();
