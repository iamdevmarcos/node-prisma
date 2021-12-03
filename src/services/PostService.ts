import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const PostService = {

    findAll: async () => {
        return await prisma.post.findMany({
            where: {
                published: true
            },
            orderBy: {
                id: 'desc'
            }
        });
    }

}