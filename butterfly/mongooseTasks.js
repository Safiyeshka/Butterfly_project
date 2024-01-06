const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/test');

var schema = mongoose.Schema({ name: String })
schema.methods.kind = function(){
    console.log(this.get("name") + " Oto")
    }
    
const Butterfly = mongoose.model('Butterfly', schema);

const butterfly = new Butterfly({ name: 'Greta' });
butterfly.save().then(() => {
    butterfly.kind()
});