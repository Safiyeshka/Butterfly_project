const express = require('express');
const router = express.Router();
const Butterfly = require("../models/butterfly").Butterfly;
var async = require("async");
var checkAuth = require("./../middleware/checkAuth.js")

// /* GET users listing. */
// router.get('/', function(req, res, next) {
//   res.send('Новый маршрутизатор, для маршрутов, начинающихся с butterflies');
// });

/* Страница бабочек */
router.get('/:nick', checkAuth, async function(req, res, next) {
    try {
      const [butterfly, butterflies] = await Promise.all([
        Butterfly.findOne({ nick: req.params.nick }),
        Butterfly.find({}, { _id: 0, title: 1, nick: 1 })
      ]);
    
      if (!butterfly) {
        throw new Error("Page not found");
      }
      
      renderButterfly(res, butterfly.title, butterfly.avatar, butterfly.desc, butterflies);
    } catch (err) {
      next(err);
    }
  });
  
  function renderButterfly(res, title, picture, desc, butterflies) {
    console.log(butterflies);
  
    res.render('butterfly', {
      title: title,
      picture: picture,
      desc: desc,
    });
  }
  
  
  module.exports = router;
