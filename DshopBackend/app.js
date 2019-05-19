var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var mongoose = require('mongoose')

var dbconurl = require('./connectionString')
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var productsRouter = require('./routes/products')
var cartsRouter = require('./routes/carts')
var purchasesRouter = require('./routes/purchases')
var sellsRouter = require('./routes/sells')
var categoriesRouter = require('./routes/categories')
var paymentsRouter = require('./routes/payments')
var dbConnector = require('./api/middlewares/dbConnection')

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


//importing routers
app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('./products',productsRouter)
app.use('/carts',cartsRouter)
app.use('/purchases',purchasesRouter)
app.use('/sells',sellsRouter)
app.use('/payments',paymentsRouter)
app.use('/categories',categoriesRouter)

//connecting to database

mongoose.connect(dbconurl,{useNewUrlParser:true})

var db = mongoose.connection;

db.on('error',console.error.bind(console,'Connection Error!'))
db.once('open',function(){
    console.log("We are connected!!!")
})

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
  res.render('error');
});

module.exports = app;
