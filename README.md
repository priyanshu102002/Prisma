# Getting Started with Prisma

This repository contains the source code for the [Getting Started with Prisma](https://www.prisma.io/docs/getting-started/quickstart) Tech Talk.

## Prerequisites

Before you begin, ensure you have the following installed:

- Node.js and npm
- Prisma CLI
- Database (e.g., PostgreSQL, MySQL, SQLite)

## Installation

1. Create TypeScript project and set up Prisma:

    ```bash
    mkdir prisma
    cd prisma
    ```

2. Next, initialize a TypeScript project using npm::

    ```bash
    npm init -y 
    npm install typescript ts-node @types/node --save-dev
    ```

3. Now, initialize TypeScript:

    ```bash
    npx tsc --init
    ```

4. Then, install the Prisma CLI as a development dependency in the project:

    ```bash
    npm install prisma --save-dev
    ```

5. Finally, set up Prisma with the init command of the Prisma CLI:

    ```bash
    npx prisma init --datasource-provider sqlite
    ```

6.  Run a migration to create your database tables with Prisma Migrate:
    
        ```bash
        npx prisma migrate dev --name init
        ```

7. Next, execute the script with the following command:
    
        ```bash
        npx ts-node script.ts
        ```

