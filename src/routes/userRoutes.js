const express = require('express');
const routes = express.Router();

routes.get("/");
routes.get("/:user_id");

routes.post("/login");
routes.post("/register");

module.exports = routes;