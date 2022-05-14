const express = require('express');
const app = express.Router();

const users = require("./User/User");
const chats = require("./Chat/Chat");
const userChat = require("./UserChat/userChat");

app.use("/users", users);
app.use("/chats", chats);
app.use("/userChat", userChat); 

module.exports = app;