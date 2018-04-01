var express = require('express');
var fs = require('fs');
var stylus = require('stylus');

var str = fs.readFileSync('./style.styl', 'utf8');

stylus.render(str, function(err, css){
    if (err) throw err;
    fs.writeFileSync('./style.css', css, 'utf8');
});

var app = express();
app.use('/', express.static(__dirname + '/'));
app.get('/', function(req, res, err) {
    res.sendfile('index.html');
});

app.listen(3000, function() {
    console.log('server started');
});