const express = require('express');
const router = express.Router();
// const Butterfly = require("../models/butterfly").Butterfly;
var async = require("async");
var db = require('../mySQLConnect.js');
var checkAuth = require("./../middleware/checkAuth.js")

router.get("/:nick", checkAuth, function(req, res, next) {
  db.query(`SELECT * FROM butterflies WHERE butterflies.nick = '${req.params.nick}'`, (err, butterflies) => {
  if(err) {
    console.log(err);
    if(err) return next(err)
    } else {
      if(butterflies.length == 0) return next(new Error("Page not found"))
        var butterfly = butterflies[0];
        res.render('butterfly', {
          title: butterfly.title,
          picture: butterfly.avatar,
          desc: butterfly.about
  })
}
})

});

// // /* GET users listing. */
// // router.get('/', function(req, res, next) {
// //   res.send('Новый маршрутизатор, для маршрутов, начинающихся с butterflies');
// // });

// /* Страница бабочек */
// router.get('/:nick', checkAuth, async function(req, res, next) {
//     try {
//       const [butterfly, butterflies] = await Promise.all([
//         Butterfly.findOne({ nick: req.params.nick }),
//         Butterfly.find({}, { _id: 0, title: 1, nick: 1 })
//       ]);
    
//       if (!butterfly) {
//         throw new Error("Page not found");
//       }
      
//       renderButterfly(res, butterfly.title, butterfly.avatar, butterfly.desc, butterflies);
//     } catch (err) {
//       next(err);
//     }
//   });
  
//   function renderButterfly(res, title, picture, desc, butterflies) {
//     console.log(butterflies);
  
//     res.render('butterfly', {
//       title: title,
//       picture: picture,
//       desc: desc,
//     });
//   }
  
  
  module.exports = router;
