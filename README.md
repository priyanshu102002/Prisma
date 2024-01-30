# Getting Started with Prisma

This repository contains the source code for the [Getting Started with Prisma](https://www.prisma.io/docs/getting-started/quickstart) .

## Introduction

Prisma is a database toolkit that consists of these tools: Prisma Client, Prisma Migrate, and Prisma Studio. Prisma Client is an auto-generated and type-safe query builder for Node.js and TypeScript.

Prisma Migrate is a declarative data modeling and migration system. Prisma Studio is a visual editor for your database.

## Prerequisites

Before you begin, ensure you have the following installed:

-   Node.js and npm
-   Prisma CLI
-   Database (e.g., PostgreSQL, MySQL, SQLite)

## Clone this repository

```bash
    git clone https://github.com/priyanshu102002/Prisma.git
```
-  Then, navigate to the project folder:
```bash
    cd Prisma
```
- Next, install the dependencies:
```bash
    npm install
```



## Installation and Setup for New Project

1.  Create TypeScript project and set up Prisma:

    ```bash
    mkdir prisma
    cd prisma
    ```

2.  Next, initialize a TypeScript project using npm::

    ```bash
    npm init -y
    npm install typescript ts-node @types/node --save-dev
    ```

3.  Now, initialize TypeScript:

    ```bash
    npx tsc --init
    ```

4.  Then, install the Prisma CLI as a development dependency in the project:

    ```bash
    npm install prisma --save-dev
    ```

5.  Finally, set up Prisma with the init command of the Prisma CLI:

    ```bash
    npx prisma init --datasource-provider sqlite
    ```

6.  Run a migration to create your database tables with Prisma Migrate:

    ```bash
    npx prisma migrate dev --name init
    ```

7.  Next, execute the script with the following command:

    ```bash
    npx ts-node script.ts
    ```

8.  Finally, open the database with the following command:

    ```bash
    npx prisma studio
    ```

## Resources

-   [Prisma Docs](https://www.prisma.io/docs/)
