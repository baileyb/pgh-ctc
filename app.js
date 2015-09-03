var express = require('express');

var app = express();

app.get('/ctc', function(req, res) {
  res.send(require('ctc.json'));
});

app.get('/', function(req, res) {
  res.sendfile('index.html');
});

app.listen(3000);
