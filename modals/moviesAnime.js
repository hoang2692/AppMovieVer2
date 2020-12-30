var mongoose = require('mongoose')


var movieAnimeSchema = new mongoose.Schema({
    title: String,
    imageUrl: String,
    description: String,
    rating: String,
    year: String,
    duration: String,
    trailer: String,
    movie: String
},{ versionKey: false });

var moviesAnime = mongoose.model('moviesAnime',movieAnimeSchema, 'moviesAnime');

module.exports = moviesAnime;

