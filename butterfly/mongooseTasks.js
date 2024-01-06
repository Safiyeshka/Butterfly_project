const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test1')
var Butterfly = require("./models/butterfly").Butterfly

var schema = mongoose.Schema({ name: String })

const butterfly = new Butterfly({ 
    title: "Cethosia Cyane",
    nick: "cethosia_cyane"
});

butterfly.save().then(() => {
    console.log(arguments)
});