# Server Testing

## Topics

- automated testing.
- jest testing framework.
- supertest module.

## Assignment

For this project you will use `Test Driven Development` to create a RESTful API using `Node.js` and `Express` that publishes a set of endpoints to manage a _resource_ of your choosing. Data can be stored in memory, adding a **test database is optional**.

## Download Project and Install Dependencies

- fork and clone this repository.
- **CD into the folder** where you downloaded the repository.
- run `npm i` to download all dependencies.
- type `npm test` to run the tests.

## Requirements

- use `jest` and `supertest` to write the tests.
- Your API must be able to **create** and **delete** a _resource_ of your choosing.
- Write a minimum of two tests per route handler.

npm init -y
npx gitignore node //only if there is not gitignore in project
npm i -D nodemon
npm i express
npm i knex sqlite3
npm i knex-cleaner
npm i cors
npm i helmet
npm i dotenv
npm i bcryptjs
npm i express-session
npm i connect-session-knex
mkdir data
mkdir schemes
touch index.js
touch server.js
knex init
cd data
mkdir migrations
mkdir seeds
touch db-config.js
cd -
knex migrate:make new_table
