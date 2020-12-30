var mongoose = require('mongoose')


var movieCaroselSchema = new mongoose.Schema({
    title: String,
    imageUrl: String,
    description: String,
    rating: String,
    year: String,
    duration: String,
    trailer: String,
    movie: String
},{ versionKey: false });

var movieCarosels = mongoose.model('movieCarosels',movieCaroselSchema, 'movieCarosels');

module.exports = movieCarosels;

