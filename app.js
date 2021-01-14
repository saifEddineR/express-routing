const express = require('express');
const bodyParser = require('body-parser');

//express
const app = express();
// body parser ---------------------------------------
app.use(bodyParser.urlencoded({ extended: false }));
//routes ---------------------------------------------
const errorRouter = require('./routes/error');
const contactRouter = require('./routes/contact');
const servicesRouter = require('./routes/services');
const homeRouter = require('./routes/home');
// css public folder ----------------------------
app.use(express.static('public'));

let date = new Date();
let today = date.toDateString().slice(0, 3);
let time = date.getHours();
if (today !== 'sat' && today !== 'sun' && time >= 9 && time <= 17) {
  app.use(contactRouter);
  app.use(servicesRouter);
  app.use(homeRouter);
  app.use(errorRouter);
} else {
  app.use(errorRouter);
}

app.listen(3000);
