const express = require('express')
const router = express();
const MoviesAnimeController = require('../Controllers/moviesAnime');

router.get('/movies/anime',MoviesAnimeController.getAll)
router.post('/moviesAnime/create',MoviesAnimeController.create)
module.exports = router;