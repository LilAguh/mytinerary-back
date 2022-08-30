var express = require('express');
const { request } = require('../app');
var router = express.Router();

/* GET home page. */
//req = request, peticion del cliente, solo lectura
//res= response, mensaje que envia el servidor
router.get('/', function (req, res, next) {
  res.json([])
});

//http://localhost:4000/:id
//parametro de la url
router.get('/:id', function (req, res, next) {
  if (req.params.id == 123) {
    return res.status(404).json()
  }


  res.json({
    id: req.params.id
  })
});

module.exports = router;
