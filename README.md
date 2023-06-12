# ORM E-Commerce Application

## Table of Contents
- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [Video Walkthrough](#video-walkthrough)
- [License](#license)

## Description
The ORM E-Commerce Application serves a database management system that allows users to browse/interact with the items in the database. The application is built using an Object-Relational Mapping (ORM) approach, which utilizes Seuelize in order to provide a fully functioning databse that allows for real time GET/POST/PUT/DELETE functionality.

## Installation
To install and run the ORM E-Commerce Application locally, follow these steps:

1. Clone the repository to your local machine
2. Navigate to the project's root directory
3. Run `npm install` to install the required dependencies
4. Navigate to the `db` folder and enter the `MySQL` CLI using `mysql -u root -p` and follow this by entering your password
5. While in the MySQL CLI, enter `SOURCE schema.sql;` to create the database structure
6. Then navigate back to the root directory and in the CLI perform `node seeds/index.js` to populate the database with seeded data
7. Go into the `.env` file and replace `<your-password-here>` with the login to your MySQL account login
8. Start the application by running `node server.js` at the root level directory in the CLI
9. The application will be accessible at `http://localhost:3001` which we will interact with using the program `Insomnia`

## Usage
Once the application is up and running, you can access it through a web browser. The application provides the following features:

- Browse and search products by category.
- View detailed product information, including name, price, and stock availability.
- Add products to the shopping cart.
- Complete the checkout process by providing shipping and payment details.
- Manage user accounts, including registration and login.

## Video Walkthrough
[Insert a link to your video walkthrough here]

This is the video demonstration of the ORM E-Commerce Application

In this video you will see how to properly install, source and seed the database, starting the server, and a demonstration of the following functionality:

- GET routes for all categories, all products, and all tags being tested in Insomnia Core
- GET routes for a single category, a single product, and a single tag being tested in Insomnia Core
- POST, PUT, and DELETE routes for categories, products, and tags being tested in Insomnia Core

## License
MIT License

Name: Philip Kubisz
[GitHub](https://github.com/PhilKubz?tab=repositories)
Email: philip.kubisz@gmail.com