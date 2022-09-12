var express = require('express');
var router = express.Router();
const { create, allRead, read, remove, update } = require('../controllers/cityController')

/* GET users listing. */
// router.get('/:id',read)
router.post('/', create)
router.get('/', allRead)
router.get('/:id', read)
router.delete('/:id', remove)
router.put('/:id', update)

module.exports = router;