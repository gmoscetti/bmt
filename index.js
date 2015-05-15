var express = require('express');
var app = express();

app.use(express.static('public'));
app.use('/css', express.static('css'));


app.get('/bootstrap', function (req, res) {
  res.send('Hello bootstrap!');
});

app.get('*', function (req, res) {
  res.send('Hello World!');
});

var server = app.listen(3000, function () {
  console.log('Example app listening at localhost:3000');
});