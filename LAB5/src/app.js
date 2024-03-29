var express = require('express'),
    app = express(),
    path = require('path'),
    fs = require('fs');

app.use(express.static(path.join(__dirname,'public')));

// HTTP Server Listen with port 55555
var server = app.listen(55555, function(){
    console.log('This server is running on the port' + this.address().port);
});

// GET "Hello Handle"
app.get('/Hello', function(req, res){
    console.log('GET Hello from a client');
    res.send('Hello, world!');
    res.end();
})
