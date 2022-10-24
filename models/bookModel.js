const mongoose = require('mongoose');

const {Schema} = mongoose;

const bookModel = new Schema({
    title: String,
    author: String,
    genre: String,
    read: {type: Boolean, default: false}
});

// 'Recipe' here maps to the 'recipes' collection in our MongoDB database 'cookbookApp'
//   that we connected to in app.js 'mongoose.connect()'
module.exports = mongoose.model('Book', bookModel);