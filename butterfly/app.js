var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/butterfly')

var session = require("express-session")

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var butterflies = require('./routes/butterflies');

var app = express();

// view engine setup

app.engine('ejs',require('ejs-locals'));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

var MongoStore = require('connect-mongo');
app.use(session({
  secret: "butterfly",
  cookie:{maxAge:600*1000},
  resave: true,
  saveUninitialized: true,
  // secure: true,
  store: MongoStore.create({mongoUrl: 'mongodb://localhost/butterfly'})
  }));
app.use(function(req,res,next){
    req.session.counter = req.session.counter +1 || 1
    next()
    })


app.use(require("./middleware/createMenu.js"))


app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/butterflies', butterflies);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error', {title: "eror"});
});

module.exports = app;
