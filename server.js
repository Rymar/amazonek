var stockRep = require('./stockRepository')();
var app = require('./app')(stockRep);

var server = app.listen(process.env.PORT || 3001, function () {

    var host = server.address().address;
    var port = server.address().port;

    console.log('Example app listening at http://%s:%s', host, port);
});