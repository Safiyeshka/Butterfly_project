const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/test');

const Butterfly = mongoose.model('Butterfly', { name: String });

const kitty = new Butterfly({ name: 'Greta' });
kitty.save().then(() => console.log('бабочка'));