var express = require('express');
var router = express.Router();
var Butterfly = require("../models/butterfly").Butterfly;
var async = require("async");

// /* GET users listing. */
// router.get('/', function(req, res, next) {
//   res.send('Новый маршрутизатор, для маршрутов, начинающихся с butterflies');
// });

/* Страница бабочек */
router.get('/:nick', async function(req, res, next) {
    try {
      const [butterfly, butterflies] = await Promise.all([
        Butterfly.findOne({ nick: req.params.nick }),
        Butterfly.find({}, { _id: 0, title: 1, nick: 1 })
      ]);
    
      if (!butterfly) {
        throw new Error("Нет такоЙ бабочки");
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
      menu: butterflies
    });
  }
  
  
  
  module.exports = router;
