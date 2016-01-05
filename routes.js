module.exports = function (stockRep) {
    return {
        addBook: function (req, res) {

            stockRep.addBook(req.body.isbn, req.body.count)
                .then(function () {
                    res.json(req.body);
                }).catch(function () {
                    res.status(500).send('error while adding book');
                });
        },
        getBook: function (req, res) {

            stockRep.getBook(req.params.isbn).then(function (book){

                if (book) {
                    res.json(book);
                } else {
                    res.status(404).json({ msg: 'book not found'});
                }

            }).catch(function () {
                res.status(500).send('error while getting book');
            });
        },
        clientError: function (req, res, next) {
            var err = new Error('Not Found');
            err.status = 404;
            next(err);
        },
        serverError: function (err, req, res, next) {

            res.status(err.status || 500);
            console.error(err.stack);
            res.json({
                message: err.message,
                error: (process.env.NODE_ENV === 'production') ? {} : err.toString()
            });
        }
    };
};