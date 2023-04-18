var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Mundo' });
});

router.get('/info', (req, res) => {
  res.send('Ruta con la información');
});

module.exports = router;
