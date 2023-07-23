# ORM E-Commerce Application

## Description
The ORM E-Commerce Application serves a database management system that allows users to browse/interact with the items in the database. 
The application is built using an Object-Relational Mapping (ORM) approach, which utilizes Seuelize in order to provide a fully functioning databse that allows for real time GET/POST/PUT/DELETE functionality.
The application is fully demonstrated in Insomnia.

## Table of Contents
- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [Video Walkthrough](#video-walkthrough)
- [License](#license)
- [Contact](#contact)

## Installation
To install and run the ORM E-Commerce Application locally, follow these steps:

1. Clone the repository to your local machine
2. Navigate to the project's root directory
3. Run `npm install` to install the required dependencies
4. Navigate to the `db` folder and enter the `MySQL` CLI using `mysql -u root -p` and follow this by entering your password
5. While in the MySQL CLI, enter `SOURCE schema.sql;` to create the database structure
6. Then navigate back to the root directory and in the CLI perform `node seeds/index.js` to populate the database with seeded data
7. Create  a `.env` file with 
    ```
    DB_NAME=ecommerce_db
    DB_USER=root
    DB_PASSWORD=<the login to your MySQL account login>
    ```
8. Start the application by running `node server.js` at the root level directory in the CLI
9. The application will be accessible at `http://localhost:3001` which we will interact with using the program `Insomnia`

## Usage
Once the server is running - you can test the functionality of the database that is created by using Insomnia, or another API endpoint program.

## Video Walkthrough
https://drive.google.com/file/d/1xGZS4mfO7QYLH-JTnS4fGNcCreE71m3E/view

This is the video demonstration of the ORM E-Commerce Application using Insomnia

In this video you will see a demonstration of the following functionality:

For Categories, Products, and Tags
- Get routes for all/GET routes by ID (retrieve)

- POST routes   (create)

- PUT routes    (update)

- DEL routes    (delete)


## License
MIT License

## Contact
Name: Philip Kubisz
[GitHub](https://github.com/PhilKubz?tab=repositories)
Email: philip.kubisz@gmail.com