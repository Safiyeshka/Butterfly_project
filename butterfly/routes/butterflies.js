var express = require('express');
var router = express.Router();
var Butterfly = require("../models/butterfly").Butterfly


// /* GET users listing. */
// router.get('/', function(req, res, next) {
//   res.send('Новый маршрутизатор, для маршрутов, начинающихся с butterflies');
// });

/* Страница бабочек */
router.get("/:nick", async (req, res, next) => {
    try {
      const butterfly = await Butterfly.findOne({ nick: req.params.nick });
      console.log(butterfly);
      if (!butterfly) {
        throw new Error("Нет такой бабочки!");
      }
      res.render('butterfly', {
        title: butterfly.title,
        picture: butterfly.avatar,
        desc: butterfly.desc
      });
    } catch (err) {
      next(err);
    }
  });
        
    
module.exports = router;
