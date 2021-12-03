import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient();

type findOneDataProp = {
    id?: number;
    email?: string;
}

export const UserService = {

    findAll: async () => {
        return await prisma.user.findMany();
    },

    findOne: async (data: findOneDataProp) => {
        return await prisma.user.findUnique({
            where: data
        });
    }

}