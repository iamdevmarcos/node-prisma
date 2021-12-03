import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const main = async () => {
    await prisma.user.deleteMany({});
    await prisma.post.deleteMany({});

    const user = await prisma.user.create({
        data: {
            email: 'marcosdev.me@gmail.com',
            name: 'Marcos',
            age: 90
        }
    });

    const post = await prisma.post.create({
        data: {
            title: 'Post de teste via seed',
            body: 'Este é um post de teste...',
            authorId: user.id
        }
    });
}

main();