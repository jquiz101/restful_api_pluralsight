const express = require('express');

function routes(Book){
    const bookRouter = express.Router();

    bookRouter.route('/books')
    .post((req, res) => {
        const book = new Book(req.body);
        
        book.save(); 
        return res.status(201).json(book);
    })
    .get((req, res) => {
        const query = {};

        if (req.query.genre) {
            query.genre = req.query.genre;
        }

        console.log('a');
        Book.find(query, (err, books) => {
            if(err){
                console.log('b');
                res.send(err);
                return;
            }
            console.log('c');
            // console.log(books);
            return res.json(books);
        });
    });

bookRouter.route('/books/:bookId')
    .get((req, res) => {

        console.log('a');
        Book.findById(req.params.bookId, (err, book) => {
            if(err){
                console.log('b');
                res.send(err);
                return;
            }
            console.log('c');
            // console.log(books);
            return res.json(book);
        });
    });

    return bookRouter;
}

module.exports = routes;