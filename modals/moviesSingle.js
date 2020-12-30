var mongoose = require('mongoose')


var movieSingleSchema = new mongoose.Schema({
    title: String,
    imageUrl: String,
    description: String,
    rating: String,
    year: String,
    duration: String,
    trailer: String,
    movie: String
},{ versionKey: false });

var moviesSingle = mongoose.model('moviesSingle',movieSingleSchema, 'moviesSingle');

module.exports = moviesSingle;

