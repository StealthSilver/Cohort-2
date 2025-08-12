import { PrismaClient } from '@prisma/client';


const client = new PrismaClient();

async function main() {
    const user = await client.user.findFirst({
        where: {
            id:1
        },
        include: {
            todos: true
        }
    })

    console.log(user)
}

main()
    .then(() => console.log('User created'))
    .catch(console.error)
    .then(async () => {
        await client.$disconnect();
    });
