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

Navigate to /server

Creating database

    npm run db:init

This will create the database needed for this app.

Migrating database

    npm run db:migrate

This will create the tables in the previously created database.

Seeding database

    npm run db:seed

This will insert initial data inside the tables created before.

### Run the web API (server)

    npm run dev

## Running the tests

The server app have automation test inside the test directory.
The tests includes unit and integration tests which will need the database connection.

Run the test

    npm run test

To view the coverage of this test run this

    npm run coverage

This will displays the test coverage of the server codebase, excluding migration, seed, and config files.

## Deployment

This will give you instruction of how to deploy the server and client to live systems

### Deploy server to Heroku

Create Heroku account [here](https://signup.heroku.com/) and install [Heroku CLI](https://devcenter.heroku.com/articles/heroku-cli)

Login to Heroku CLI

    heroku login

Initialize Heroku project

    heroku create

This will initialize Heroku project and spawn new git remote for heroku

Because this repository contained multiple projects, heroku build will fail if the root branch pushed to heroku.
Instead push the subtree /server to heroku remote

    git subtree push --prefix server heroku master

This will build the web api in heroku, but there are no still no database.

Next, open your heroku console on the browser and navigate to the Resources tab.

Add Heroku Postgres as add-ons and attached as database.

<img width="1246" alt="Screen Shot 2021-07-07 at 07 05 02" src="https://user-images.githubusercontent.com/24917415/124677146-04d95e80-deea-11eb-9c9c-8231eaa823dd.png">

Make sure Config Vars `DATABASE_URL` was generated in Settings section.
Also add `PGSSLMODE` kwy with value `no-verify` in Config Vars.

<img width="1232" alt="Screen Shot 2021-07-07 at 07 05 30" src="https://user-images.githubusercontent.com/24917415/124676880-8d0b3400-dee9-11eb-8766-28f0849a28ad.png">

After this, you are ready to migrate and seed the database.

Run the migration in heroku

    heroku run npm rum db:migrate

Run the migration in heroku

    heroku run npm rum db:migrate
    
At last, run the app

    heroku open

If success, it should redirect to browser to open the root route.
The url generated, will be used when deploying the client app.

## Built With

  - [Experss.js](https://expressjs.com/) - Server
  - [Postgres](https://www.postgresql.org/) - Database
  - [Sequelize](https://sequelize.org/) - ORM
  - [Mocha](https://mochajs.org/) - Test runner
  - [Mocha](https://sinonjs.org/) - Mock library
  - [React.js](https://reactjs.org/) - Client (SPA)
  - [Material-UI](https://material-ui.com/) - React components

## App Screenshots

Test coverage
![Screen Shot 2021-07-07 at 05 09 59](https://user-images.githubusercontent.com/24917415/124667866-38ac8800-deda-11eb-8f72-02f4a33a5996.png)

Product List
<img width="1440" alt="Screen Shot 2021-07-07 at 05 11 45" src="https://user-images.githubusercontent.com/24917415/124667944-5843b080-deda-11eb-854e-d4210c5a46df.png">

Shopping Cart
<img width="1440" alt="Screen Shot 2021-07-07 at 05 12 33" src="https://user-images.githubusercontent.com/24917415/124668002-6c87ad80-deda-11eb-9945-747586eaa5ee.png">

Checkout
<img width="1440" alt="Screen Shot 2021-07-07 at 05 12 52" src="https://user-images.githubusercontent.com/24917415/124668044-80cbaa80-deda-11eb-932d-0d00f2cb0d34.png">

  
