const express = require('express')
const router = express();
var multer = require('multer');
const MoviesTheatherController = require('../Controllers/moviesTheather');

router.get('/movies/theather',MoviesTheatherController.getAll)
router.post('/moviesTheather/create',MoviesTheatherController.create)
module.exports = router;