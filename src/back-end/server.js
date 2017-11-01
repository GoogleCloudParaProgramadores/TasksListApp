var express = require('express');
var path = require('path');
var app = express();

// Set Static path
app.use('/', express.static(path.join(__dirname, '/')));

app.get('/', function(req, res){
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/callback', function(req, res){
    res.sendFile(path.join(__dirname, 'index.html'));
});

var server = app.listen(process.env.PORT || 3000, function () {
    var port = server.address().port;

    /* eslint-disable angular/log*/
    /* eslint-disable no-console */
    console.log('App now running on port ', port);
    /* eslint-enable no-console */
    /* eslint-enable angular/log*/
});
