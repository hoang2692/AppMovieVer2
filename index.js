const express = require('express')
var bodyParser = require('body-parser')
var mongoose = require('mongoose')

mongoose.connect('mongodb+srv://admin:123@cluster0.kmcmn.gcp.mongodb.net/moviesApp?retryWrites=true&w=majority',{ useNewUrlParser: true,useUnifiedTopology: true,useCreateIndex: true }).then(db => console.log("Connect Success"))

const newapp = express();
const port =process.env.PORT || 3000;
var MovieCarodel = require('./Api/Routers/moviesCarosel')
var MovieNews = require('./Api/Routers/moviesNews')
var MovieTheather = require('./Api/Routers/moviesTheather')
var MovieAnime = require('./Api/Routers/moviesAnime')
var MovieRecommend = require('./Api/Routers/moviesRecommend')
var MovieSingle = require('./Api/Routers/moviesSingle')
var CustomerRoute = require('./Api/Routers/customerRoute')
newapp.use(bodyParser.json());
newapp.use(bodyParser.urlencoded({ extended: true }));
newapp.use(express.static('public'));
newapp.use('/', MovieCarodel)
newapp.use('/', MovieNews)
newapp.use('/', MovieRecommend)
newapp.use('/', MovieSingle)
newapp.use('/', MovieTheather)
newapp.use('/', MovieAnime)
newapp.use('/', CustomerRoute)
newapp.listen(port, () =>console.log("Hello " + port))