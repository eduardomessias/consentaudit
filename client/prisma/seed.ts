// seed oauth server model with github

import { PrismaClient } from '@prisma/client'


const prisma = new PrismaClient()


async function main() {
    await prisma.oAuthServer.create({
        data: {
            name: 'github',
        }
    })
}


main()
    .then(async () => {
        await prisma.$disconnect()
    })
    .catch(async (error) => {
        console.error(error)
        await prisma.$disconnect()
        process.exit(1)
    })