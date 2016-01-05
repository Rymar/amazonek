var MongoClient = require('mongodb').MongoClient;

var dbPromise = MongoClient.connect('mongodb://localhost:27017/amazon');

module.exports = function () {
    return {
        addBook: function (isbn, count) {

            return dbPromise.then(function (db) {

                var collection = db.collection('books');

                return collection.updateOne(
                    { isbn : isbn },
                    { isbn: isbn, count: count },
                    { upsert: true }
                );
            });
        },
        getBook: function (bookIsbn) {

            return dbPromise.then(function (db) {

                var collection = db.collection('books');

                return collection.find({ isbn: bookIsbn}).limit(1).toArray();

            }).then(function (result) {

                if (result.length) {
                    return result[0];
                } else {
                    return null;
                }
            });
        }
    };
};