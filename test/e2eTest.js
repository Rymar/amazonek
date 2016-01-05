var stockRep = require('../stockRepository')();
var request = require('supertest');
var app = require('../app')(stockRep);

var assert = require('assert');

describe('Amazon', function () {

    it('adding book', function (done) {

        request(app)
            .post('/stock')
            .set('Content-Type', 'application/json')
            .send({ isbn: "1", count: 10})
            .expect('Content-Type', /json/)
            .expect(200)
            .end(function (err, res) {

                if (err) { return done(err); }
                assert.equal(res.body.isbn, "1");
                assert.equal(res.body.count, 10);
                done();
            });
    });

    it('getting by isbn', function (done) {

        stockRep.addBook("1234", 10).then(function () {

            request(app)
                .get('/stock/1234')
                .set('Content-Type', 'application/json')
                .set('Accept', 'application/json')
                .expect(200)
                .end(function (err, res) {

                    if (err) { return done(err); }
                    assert.equal(res.body.count, 10);
                    done();
                });
        });
    });
});