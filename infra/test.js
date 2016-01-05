var heroin = require('heroin-js');
var _ = require('lodash');
var baseConfig = require('./base');

var prodConfig = _.merge({}, baseConfig, {
    name: 'test-amazonek',
    domains: [ ]
});

var configurator = heroin(process.env.HEROKU_API_TOKEN, {debug: false});
configurator(prodConfig);