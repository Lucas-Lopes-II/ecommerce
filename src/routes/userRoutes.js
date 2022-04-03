const express = require('express');
const routes = express.Router();
const userController = require('../controllers/userController');

routes.get("/");
routes.get("/:user_id");

routes.post("/login", userController.login);
routes.post("/register", userController.register);

module.exports = routes;