const express = require('express')
const routes = express.Router();


routes.get("/cart/:cart_id");
routes.get("cart/:user_id/:cart_id");

routes.post("/cart/:user_id");

module.exports = routes;