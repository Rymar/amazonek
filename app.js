var express = require('express');
var bodyParser = require('body-parser');
var app = express();

function logRequest(req, res, next) {
    console.log('new request at: ' + new Date());
    next();
}

module.exports = function (stockRep) {

    app.use(logRequest);

    app.get('/', function (req, res) {
        res.send('Amazon');
    });

    var routes = require('./routes')(stockRep);

    app.post('/stock', bodyParser.json(), routes.addBook);
    app.get('/stock/:isbn', routes.getBook);

    app.use(routes.clientError);
    app.use(routes.serverError);

    return app;
};