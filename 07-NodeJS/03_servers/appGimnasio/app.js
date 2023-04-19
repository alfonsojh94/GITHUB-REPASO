const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const dayjs = require('dayjs');
const fs = require('fs');

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const clientsRouter = require('./routes/clients');
const apiRouter = require('./routes/api');

const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// Middlewares

// Muestro por consola la fecha antes de cada petición
app.use((req, res, next) => {
  console.log(dayjs().format('DD-MM-YYYY HH:mm.ss'));
  next();
});

// Obtengo un número aleatorio (Math.random)
// Si el número es mayor de 0.6 respondo con un mensaje (res.send)
// Si el número es menor de 0.6 llamo a next
app.use((req, res, next) => {
  const randomNum = Math.random();
  if (randomNum > 0.6) {
    res.send('No puedes pasar: ' + randomNum);
  } else {
    next();
  }
});

// Middleware para registrar en un fichero las diferentes peticiones que entran en nuestra aplicación
app.use((req, res, next) => {
  const currentDate = dayjs().format('DD-MM-YYYY HH:mm.ss');
  const linea = `[${currentDate}] MÉTODO: ${req.method} - URL: ${req.url}\n`;

  fs.appendFile('./logs/main.log', linea, (err) => {
    next();
  });
});

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/clients', clientsRouter);
app.use('/api', apiRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
