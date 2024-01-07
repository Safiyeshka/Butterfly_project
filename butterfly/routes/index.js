var express = require('express');
var router = express.Router();
const Butterfly = require("../models/butterfly").Butterfly

/* GET login/registration page. */
router.get('/logreg', function(req, res, next) {
  res.render('logreg',{title: 'Log In'});
});


/* GET home page. */
router.get('/', async (req, res, next) => {
  try {
    const menu = await Butterfly.find({}, { _id: 0, title: 1, nick: 1 });
    req.session.greeting = "Hi!!!"
    res.render('index', { title: 'Butterfly', menu: menu, counter:req.session.counter });
  } 
  catch (err) {next(err);}
});
   

module.exports = router;
