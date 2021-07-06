# XenElectronic

XenElectronic is one of electronics and home appliance store. To improve customers’ growth for their business, this web application is built for customers to purchase the products online.

## Getting Started

These instructions will give you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on deploying the project on a live system.

### Prerequisites

Requirements for the software and other tools to build, test and push 
- [node](https://nodejs.org/en/)
- [npm](https://docs.npmjs.com/getting-started)
- [postgres](https://www.postgresql.org/download/)
- [sequelize-cli](https://www.npmjs.com/package/sequelize-cli)

### Installing

Clone the repository

    https://github.com/grayfmrcl/xenelectronic

Install dependencies for client and server application

    cd server
    npm install

    cd client
    npm install
    
Create .env file in /server

    cd server
    touch .env

Fill it with

    NODE_ENV=development
    PORT=3001

This configure the server app to run in the specified environment and port.
You can use different port based on your need.

Create .env file in /client

    cd client
    touch .env

Fill it with

    REACT_APP_API_URL=http://127.0.0.1:3001

This configure the client app to use web api from the specified url.
Make sure the port specified in the url is matched with the port specified in the server configuration.

### Creating, migrating and seeding database

Make sure postgres are already running and sequelize-cli already installed.

Creating database

    cd server
    npm run db:init

This will create the database needed for this app.

Migrating database

    cd server
    npm run db:migrate

This will create the tables in the previously created database.

Seeding database

    cd server
    npm run db:seed

This will insert initial data inside the tables created before.

### Run the web API (server)

    cd server
    npm run dev

## Running the tests

The server app have automation test inside the test directory.
The tests includes unit and integration tests which will need the database connection.

Run the test

    cd server
    npm run test

To view the coverage of this test run this

    cd server
    npm run coverage

This will displays the test coverage of the server codebase, excluding migration, seed, and config files.

## Built With

  - [Experss.js](https://expressjs.com/) - Server
  - [Postgres](https://www.postgresql.org/) - Database
  - [Sequelize](https://sequelize.org/) - ORM
  - [Mocha](https://mochajs.org/) - Test runner
  - [Mocha](https://sinonjs.org/) - Mock library
  - [React.js](https://reactjs.org/) - Client (SPA)
  - [Material-UI](https://material-ui.com/) - React components
  
