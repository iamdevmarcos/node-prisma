import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient();

export const UserService = {

    findAll: async () => {
        return await prisma.user.findMany();
    }

}