const express = require('express');
const { getAllUsers, getUserByID, getUserByName, createUser, delUser } = require('../controllers/users.controller');

const routes = express.Router();

routes.get("/", getAllUsers);
routes.get("/:id", getUserByID);
routes.get("/:name", getUserByName);
routes.post("/", createUser);
routes.delete("/:id",delUser);

module.exports = routes;