const express = require('express')
const routes = express.Router();

routes.get("/products");
routes.get("/products/:user_id");
routes.get("/products/:product_id");

routes.post("/products/:user_id");

routes.delete("/products/:user_id/:product_id");

routes.patch("/products/:product_id");

module.exports = routes;