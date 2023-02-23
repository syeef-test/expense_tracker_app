const express = require('express');
const sequelize = require('./util/database');

const bodyParser = require('body-parser');
const expenseRoute = require('./routes/expenseRoute');

const app = express();

const cors = require('cors');
app.use(cors());

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

 app.use(expenseRoute);


sequelize
  .sync()
  .then((result) => {
    //console.log(result);
    app.listen(3000);
  })
  .catch((err) => {
    console.log(err);
  });