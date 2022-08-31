var express = require('express');
var router = express.Router();
const { create } = require('../controllers/cityController')

/* GET users listing. */
// router.get('/:id',read)
router.post('/', create);

module.exports = router;
