const express = require('express');
const routes = express.Router();
const userController = require('../controllers/userController');

routes.get("/user");
routes.get("/user/:user_id");

routes.post("/user/login", userController.login);
routes.post("/user/register", userController.register);

module.exports = routes;