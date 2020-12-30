const express = require('express')
const router = express();
var multer = require('multer');
const MoviesRecommendController = require('../Controllers/moviesRecommend');

router.get('/movies/recommend',MoviesRecommendController.getAll)
router.post('/moviesRecommend/create',MoviesRecommendController.create)
module.exports = router;