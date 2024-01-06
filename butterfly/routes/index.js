var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


/*Cethosia Cyane*/
router.get('/cethosia_cyane', function(req, res, next) {
  res.render('butterfly', {
        title: "Cethosia Cyane",
        picture: "images/cc1.png",
        desc: "This butterfly species, whose males are orange and females are grey and white, lives in India and China.",
        
  });
});


/*Greta Oto*/
router.get('/greta_oto', function(req, res, next) {
  res.render('butterfly', {
        title: "Greta Oto",
        picture: "images/go1.png",
        desc: " Gre Oto butterflies with transparent wings live in countries such as Ecuador, Panama and Venezuela.",
      
});
});

/*Papilio Memnon*/
router.get('/papilio_memnon', function(req, res, next) {
  res.render('butterfly', {
        title: "Papilio Memnon",
        picture: "images/pm1.png",
        desc: " With a wing length of up to 150 millimetres, this butterfly species lives mainly in South Asia.",

});
});

  
 

module.exports = router;
