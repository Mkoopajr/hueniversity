var Code = require('code');
var Lab = require('lab');
var lab = exports.lab = Lab.script();
var Lib = require('../lib');

var describe = lab.describe;
var it = lab.it;
var expect = Code.expect;

describe('index', function() {

    it('should default to port 8000', function (done) {

        Lib.init(function (err, server) {

            expect(server.info.port).to.equal(8000);
            server.stop(done);
        });
    });

    it('should use defined port', function (done) {

        Lib.init(3000, function (err, server) {

            expect(server.info.port).to.equal(3000);
            server.stop(done);
        });
    });
});
