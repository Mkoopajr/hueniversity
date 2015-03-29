var Hoek = require('hoek');
var lib = require('./lib');

var port = process.env.PORT || 8000;

lib.init(port, function(err, server) {

    Hoek.assert(!err, err);
    console.log('Server started at: ' + server.info.uri);
});
