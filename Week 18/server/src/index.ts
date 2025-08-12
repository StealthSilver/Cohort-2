import { PrismaClient } from '@prisma/client';


const client = new PrismaClient();

async function main() {
    await client.user.create({
        data: {
            username: 'John Doe',
            password: 'john@example.com',
            age: 32,
        },
    });
}

main()
    .then(() => console.log('User created'))
    .catch(console.error)
    .then(async () => {
        await client.$disconnect();
    });
