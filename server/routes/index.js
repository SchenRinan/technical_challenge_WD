var express = require('express');
var router = express.Router();
const phones = require('../public/data/phones.json')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/phones', function(req, res, next) {
  res.json(phones)
});

router.get('/phones/:id', function(req, res, next) {
  
  res.json(phones.find(item => item.id===+req.params.id))
  
});

module.exports = router;
