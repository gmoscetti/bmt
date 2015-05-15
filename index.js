var express = require('express');
var app = express();

app.use(express.static('public'));
app.use('/css', express.static('css'));


app.get('/bootstrap', function (req, res) {
  res.send('Hello bootstrap!');
});

app.get('/bootstrap-template', function (req, res) {
  res.send('Hello bootstrap-template!');
});

app.get('*', function (req, res) {
  res.send('Hello World!');
});

var server = app.listen(80, function () {
  console.log('Example app listening at localhost:80');
});