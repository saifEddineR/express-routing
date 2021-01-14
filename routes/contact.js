const express = require('express');
const Router = express.Router();
const bodyParser = require('body-parser');
Router.use(bodyParser.urlencoded({ extended: false }));

Router.use('/contact', (req, res, next) => {
  res.sendFile(__dirname + '/contact.html');
  console.log(req.body);
});
module.exports = Router;
