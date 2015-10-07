var fs = require('fs');
var path = require('path');
var express = require('express');
var bodyParser = require('body-parser');
var React = require('react');
var Router = require('react-router');

var app = express();

app.set('port', (process.env.PORT || 3000));

app.use('/static', express.static(__dirname + '/public'))

app.set('views', __dirname + '/views');
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');

app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());

app.get('/', function(req, res){
  var path = req.path;
  res.locals.path = path;
  res.render('index.html');
});


app.listen(app.get('port'), function() {
  console.log('Server started: http://localhost:' + app.get('port') + '/');
});
