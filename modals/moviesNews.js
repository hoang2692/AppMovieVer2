var mongoose = require('mongoose')


var movieNewsSchema = new mongoose.Schema({
    title: String,
    imageUrl: String,
    description: String,
    rating: String,
    year: String,
    duration: String,
    trailer: String,
    movie: String
},{ versionKey: false });

var moviesNews = mongoose.model('moviesNews',movieNewsSchema, 'moviesNews');

module.exports = moviesNews;

