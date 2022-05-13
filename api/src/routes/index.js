const express = require('express');
const app = express.Router();

const users = require("./User/User");

app.use("/users", users);

module.exports = app;