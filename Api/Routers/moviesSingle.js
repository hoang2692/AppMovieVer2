const express = require('express')
const router = express();
var multer = require('multer');
const MoviesSingleController = require('../Controllers/moviesSingle');

router.get('/movies/single',MoviesSingleController.getAll)
router.post('/moviesSingle/create',MoviesSingleController.create)
module.exports = router;