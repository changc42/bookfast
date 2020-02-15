const mongoose = require('mongoose');


const BookSchema = new mongoose.Schema({
    bookID: {
        type: String
    }
});

const Book = mongoose.model('summary', BookSchema);

module.exports = Book;