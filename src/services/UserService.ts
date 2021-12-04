import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient();

type findOneDataProp = {
    id?: number;
    email?: string;
}

type createDataProp = {
    email: string;
    name: string;
    age?: number;
}

export const UserService = {

    findAll: async () => {
        return await prisma.user.findMany({
            orderBy: {
                id: 'desc'
            }
        });
    },

    findOne: async (data: findOneDataProp) => {
        return await prisma.user.findUnique({
            where: data
        });
    },

    findById: async (id: number) => {
        return await prisma.user.findUnique({
            where: { id }
        });
    },

    create: async (data: createDataProp) => {
        return await prisma.user.create({
            data: {
                email: data.email,
                name: data.name,
                age: data.age
            }
        });
    },

    remove: async (id: number) => {
        return await prisma.user.delete({
            where: { id }
        });
    }

}