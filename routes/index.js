var express = require('express');
var router = express.Router();
var cityRouter = require('./cities')
/* GET home page. */
//req = request, peticion del cliente, solo lectura
//res= response, mensaje que envia el servidor
router.get('/', function (req, res, next) {
  res.render('index', { title: 'MyTinerary' })
});

router.use('/cities', cityRouter)

module.exports = router;
