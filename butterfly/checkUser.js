const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/butterfly");
const User = require("./models/user.js").User;

const first_user = new User({
  username: "Vanya",
  password: "qwerty123"
});

first_user.save()
  .then(user => {
    console.log(user);
  })
  .catch(err => {
    throw err;
  });