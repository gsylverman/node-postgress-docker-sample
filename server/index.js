const express = require('express');
const bodyParser = require('body-parser');
require('dotenv').config();
const db = require('./db');
const app = express();
const port = 3001;

app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

app.get('/users', db.getUsers);
app.get('/users/:id', db.getUserById);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
