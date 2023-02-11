const express = require("express");
const Router = express.Router();
const UserController = require("./../api/controllers/UserController");

Router.route("/user")
    .get(UserController.GetAllUsers)
    .post(UserController.CreateUsers);

module.exports = Router;
