import express from "express";
import swaggerJSDoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Yammie backend API",
      version: "1.0.0",
      description: "backend API to manage orders",
    },
    servers: [
      {
        url: "http://localhost:5000",
      },
    ],
  },
  apis: ["./controllers/orders.js", "./models/order.js"],
};

export const specs = swaggerJSDoc(options);

export const swaggerSpec = function (req, res) {
  res.setHeader("Content-Type", "application/json");
  res.send(specs);
};
