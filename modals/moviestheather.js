var mongoose = require('mongoose')


var movieTheatherSchema = new mongoose.Schema({
    title: String,
    imageUrl: String,
    description: String,
    rating: String,
    year: String,
    duration: String,
    trailer: String,
    movie: String
},{ versionKey: false });

var moviesTheather = mongoose.model('moviesTheather',movieTheatherSchema, 'moviesTheather');

module.exports = moviesTheather;

