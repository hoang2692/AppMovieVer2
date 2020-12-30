var mongoose = require('mongoose')


var movieRecommendSchema = new mongoose.Schema({
    title: String,
    imageUrl: String,
    description: String,
    rating: String,
    year: String,
    duration: String,
    trailer: String,
    movie: String
},{ versionKey: false });

var moviesRecommend = mongoose.model('moviesRecommend',movieRecommendSchema, 'moviesRecommend');

module.exports = moviesRecommend;

