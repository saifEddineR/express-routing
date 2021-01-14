const express = require('express');
const Router = express.Router();

Router.use('/+*', (req, res, next) => {
  res.sendFile(__dirname + '/error.html');
});

module.exports = Router;
