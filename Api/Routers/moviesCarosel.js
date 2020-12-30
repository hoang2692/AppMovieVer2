const express = require('express')
const router = express();
var multer = require('multer');
const MoviesCaroselController = require('../Controllers/moviesCarosel');

router.get('/movies/carosel',MoviesCaroselController.getAll)
router.post('/moviesCarosel/create',MoviesCaroselController.create)
module.exports = router;