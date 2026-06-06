const express = require('express');
const { getAllUsers, getUserByID, getUserByName, createUser } = require('../controllers/users.controller');

const routes = express.Router();

routes.get("/", getAllUsers);
routes.get("/:id", getUserByID);
routes.get("/:name", getUserByName);
routes.post("/", createUser);

module.exports = routes;