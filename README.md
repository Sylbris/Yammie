# YAMMIE

## About
This project represents a backend API for Yammie,
A new restaurant.

https://yammie-api.onrender.com


## Installation & Run
Please note I used mongoDB atlas as my database,
So I have included a sample .env file where you 
can add a username and password as you wish.
After that change the name to .env.

Clone the repository
```
$ git clone https://github.com/Sylbris/Yammie.git
```

Build docker
```
$ docker build ./YAMMIE/ -t yammieapi:latest
```

Run docker 
```
$ docker run --name yammieapi -p 5000:5000/tcp -d yammieapi
```

Make sure container is up
```
$ docker ps -a
```

Server should be up and running.

## Swagger documentation - HTML and JSON
* Swagger UI:
 
 
     https://yammie-api.onrender.com/api/v1

* JSON: 


     https://yammie-api.onrender.com/api/v1/json
     
## Structure
```
Yammie 
 ┣ controllers
 ┃ ┗ orders.js
 ┃ ┗ swagger.js
 ┣ models
 ┃ ┗ order.js
 ┣ routes
 ┃ ┗ orders.js
 ┃ ┗ swagger.js
 ┣ tests
 ┃ ┣ controllers
 ┃ ┃ ┗ orders.spec.js
 ┃ ┗ db.js 
 ┣ .env.example
 ┣ app.js
 ┣ package-lock.json
 ┣ package.json
 ┣ README.md
 ┗ server.js 

```
## REST API Endpoints

* *GET* https://yammie-api.onrender.com/api/v1/orders
* *POST* https://yammie-api.onrender.com/api/v1/orders

## Testing
```

$ npm test

```