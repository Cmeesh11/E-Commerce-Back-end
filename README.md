# E-Commerce Back-End

## Description
The most profitable web industry in the world is E-commerce, so I've created a mini version of one using express routes and sequelize. This application uses CRUD to manipulate products, their respective tags, and their categories.

## Usage
To fully utilize the functionality of this program, it is reccommended to be using a testing API such as Postman or Insomnia. 

First, use the provided .env.EXAMPLE file as a template, and change the values in that file to match your SQL login information. You'll also want to run ```mysql -u root -p``` in the terminal and create the database with ```source [PATH TO schema.sql]```.

Then, create the required routes for each respective model (Product, Category, and Tag). Each of these should have 2 GET routes, a POST, a PUT, and a DELETE. To see the exact routes, refer to their routes files. 

Finally, you need to start the server through the command line using ```npm start```.

Once that is done, you'll be able to manipulate the database however you like by either retrieving, adding, updating, or deleting something.

## Tests
If you would not like to create every single product, tag, and category yourself, there are included seeds files that can be used. To seed the database, run the index.js file within the seeds directory using ```node [PATH TO seeds/index.js]```.

## Walkthrough Video
