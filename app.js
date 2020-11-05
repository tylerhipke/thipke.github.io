const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
// const mongoose = require('mongoose');

// const databaseConnect = require("./controllers/databaseConnect");
// const articles = require('./routes/articles');
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// databaseConnect();
// app.use('/articles', articles);

app.get('/', (req, res) => {
  res.sendFile('./views/index.html', { root: __dirname });
});

module.exports = app;
