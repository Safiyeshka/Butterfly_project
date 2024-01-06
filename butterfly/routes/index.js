var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* Страница Карамельки */
router.get('/karamelka', function(req, res, next) {
  res.send("<h1>Страница Карамельки</h1>")
  });

/*Cethosia Cyane*/

router.get('/cethosia_cyane', function(req, res, next) {
    res.send("<h1>Cethosia Cyane</h1>")
  });


/*Greta Oto*/

router.get('/greta_oto', function(req, res, next) {
  res.send("<h1>Greta Oto</h1>")
});


/*Papilio Memnon*/

router.get('/papilio_memnon', function(req, res, next) {
  res.send("<h1>Papilio Memnon</h1>")
});
  

module.exports = router;
