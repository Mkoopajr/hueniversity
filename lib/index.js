// Load modules

var Hapi = require('hapi');
var Version = require('./version');


// Declare internals

exports.init = function (port, callback) {

    if (typeof port === 'function') {
        callback = port;
        port = undefined;
    }

    var server = new Hapi.Server();
    server.connection({ port: port || 8000 });
    server.register(Version, function (err) {

        server.start(function (err) {

            return callback(err, server);
        });
    });
};
