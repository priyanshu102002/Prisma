import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {

    //! Create User
    const user = await prisma.user.create({
        data: {
            name: "Aman",
            email: "aman@prisma.io",
        },
    });

    //! Get all Users
    // const users = await prisma.user.findMany();

    // ! Create Article associated with User
    const article = await prisma.article.create({
        data: {
            title: "Join us for Prisma Day 2020",
            body: "This is a body",
            author: {
                connect: {
                    id: 1,
                },
            },
        },
    });

    //! Get all Articles
    const articles = await prisma.article.findMany();

    //! Create user and article in one go
    const userWithArticle = await prisma.user.create({
        data: {
            name: "test",
            email: "test@gmail.com",
            article: {
                create: {
                    title: "Test title article",
                    body: "Test body article",
                }
            }
        }
    })

    //! Get all users with their articles
    const allUsers = await prisma.user.findMany({
        include: {
            article: true,
        },
    });

    //! Loop through all users and print their articles
    allUsers.forEach((user) => {
        console.log(`username: ${user.name}, email: ${user.email}`);
        user.article.forEach((article) => {
            console.log(`title: ${article.title}, body: ${article.body}`);
        });
        console.log("-------------");
    });

    //! Update Data
    const updateData = await prisma.user.update({
        where: { id: 1 },
        data: { name: "Aman Kumar" },
    });

    //! Remove Data
    const removeData = await prisma.article.delete({
        where: { id: 1 },
    });
}

main()
    .then(async () => {
        await prisma.$disconnect();
    })
    .catch(async (e) => {
        console.log(e);
        await prisma.$disconnect();
        process.exit(1);
    });
