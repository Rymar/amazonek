module.exports = function () {

    var books = [];

    return {
        addBook: function (isbn, count) {

            var foundBook = books.filter(function (book) {
                return book.isbn === isbn;
            });

            if (foundBook.length) {
                foundBook[0].isbn = isbn;
                foundBook[0].count = count;
            } else {
                books.push({ isbn: isbn, count: count });
            }

            return Promise.resolve();
        },
        getBook: function (isbn) {

            var foundBook = books.filter(function (book) {
                return book.isbn === isbn;
            });

            return Promise.resolve(foundBook.length ? foundBook[0] : null);
        }
    };
};