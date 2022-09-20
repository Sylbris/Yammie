# YAMMIE

## About
This project represents a backend API for Yammie,
A new restaurant.

## Installation & Run
```
$ git clone https://github.com/Sylbris/Yammie.git

```

## Swagger documentation - HTML and JSON
* Swagger UI:
 
 
     http://localhost:3000/api-docs

* JSON: 


     http://localhost:5000/api-docs/json
     
## Structure
```
Yammie 
 ┣ controllers
 ┃ ┗ orders.js
 ┣ models
 ┃ ┗ order.js
 ┣ routes
 ┃ ┗ orders.js
 ┣ tests
 ┃ ┣ controllers
 ┃ ┃ ┗ orders.spec.js
 ┃ ┗ db.js 
 ┣ .env
 ┣ app.js
 ┣ package-lock.json
 ┣ package.json
 ┣ README.md
 ┗ server.js 

```
## REST API Endpoints

* *GET* http://localhost:5000/orders
* *POST* http://localhost:5000/orders

## Testing
```

$ npm test

```