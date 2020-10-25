var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var router = express.Router();

var app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
  res.sendFile('./views/index.html', { root: __dirname });
});

module.exports = app;
