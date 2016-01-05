module.exports = {
    name: '',
    region: 'eu',
    maintenance: false,
    stack: 'cedar-14',
    config_vars: {MONGOLAB_URI: 'mongodb://heroku_4x78mgjj:5c76vmaot6lpjfdubl2k6f1qc4@ds033285.mongolab.com:33285/heroku_4x78mgjj'},
    addons: {},
    collaborators: ['tomasz@plan3.se',
        'rymarek@gmail.com',
        'krystian.zwak@schibsted.pl'],
    features: {
        'runtime-dyno-metadata': {enabled: false},
        'log-runtime-metrics': {enabled: false},
        'http-session-affinity': {enabled: false},
        preboot: {enabled: false},
        'http-shard-header': {enabled: false},
        'http-end-to-end-continue': {enabled: false}
    },
    formation: [{process: 'web', quantity: 1, size: 'Free'}],
    log_drains: [],
    domains: [ ]
};