const express = require('express')
const router = express();
var multer = require('multer');
const MoviesNewsController = require('../Controllers/moviesNews');

router.get('/movies/news',MoviesNewsController.getAll)
router.post('/moviesNews/create',MoviesNewsController.create)
module.exports = router;