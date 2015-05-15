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

app.set('port', (process.env.PORT || 5000));

var server = app.listen(app.get('port'), function () {
  console.log('Example app listening at localhost:80');
});