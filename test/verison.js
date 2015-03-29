var Code = require('code');
var Lab = require('lab');
var lab = exports.lab = Lab.script();
var Lib = require('../lib');
var Pkg = require('../package.json');

var describe = lab.describe;
var it = lab.it;
var expect = Code.expect;

var port = process.env.TESTPORT || 8000;

describe('/version', function() {

    it('returns version', function(done) {

        Lib.init(port, function (err, server) {

            server.inject('/version', function(response) {

                expect(response.statusCode).to.equal(200);
                expect(response.result).to.deep.equal({ version: Pkg.version });
                server.stop(done);
            });
        });
    });
});
