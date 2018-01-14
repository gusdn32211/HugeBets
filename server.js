var express = require('express');
var http = require('http');

var app = express();

app.set('views', './views');
app.set('view engine', 'jade');

app.use(express.static('public'));

app.get('/', function(req, res) {
  res.render('home', {
    title: 'Welcome'
  });
});

app.get('/test',function(req, res) {

})

app.listen(process.env.PORT || 5000)
