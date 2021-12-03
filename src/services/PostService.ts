import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

type createDataProp = {
    title: string;
    body: string;
    authorId: number;
}

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
    },

    findOne: async (id: number) => {
        return await prisma.post.findUnique({
            where: { id }
        });
    },

    create: async (data: createDataProp) => {
        return await prisma.post.create({ data });
    }

}