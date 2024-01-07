const db = require('./../mySQLConnect'); // assuming MySQL database connection

module.exports = function(req, res, next) {
    res.locals.nav = [];
    db.query('SELECT butterflies.title, butterflies.nick FROM butterflies', function(err, result) {
        if (err) throw err;
        res.locals.nav = result;
        next();
    });
};





// const Butterfly = require("./../models/butterfly").Butterfly;

// module.exports = async function(req, res, next) {
//     try {
//       res.locals.nav = [];
//       const result = await Butterfly.find(null, { _id: 0, title: 1, nick: 1 });
//       res.locals.nav = result;
//       next();

//     } catch (err) {
//       throw err;
//     }
// };