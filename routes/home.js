const express = require('express');
const Router = express.Router();

Router.use('/', (req, res, next) => {
  res.sendFile(__dirname + '/home.html');
});

module.exports = Router;
