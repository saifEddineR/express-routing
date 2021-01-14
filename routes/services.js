const express = require('express');
const Router = express.Router();

Router.use('/services', (req, res, next) => {
  res.sendFile(__dirname + '/services.html');
});

module.exports = Router;
