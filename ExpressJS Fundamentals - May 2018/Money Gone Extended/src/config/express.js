const express = require('express');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const session = require('express-session');
const passport = require('passport');
const handlebars = require('express-handlebars');
const helpers = require('../helpers/helpers');
const cors = require('cors');

module.exports = (app) => {
  let hbs = handlebars.create({
    defaultLayout: 'main',
    helpers: helpers,
    extname: '.hbs',
    partialsDir: ['views/basic', 'views/expenses'],
  });
  app.engine('.hbs', hbs.engine);

  app.set('view engine', 'hbs');
  app.use(cookieParser());
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(cors());
  app.use(
    session({
      secret: 'neshto-taino!@#$%',
      resave: false,
      rolling: true,
      saveUninitialized: false,
      cookie: {
        maxAge: 80000
      }
    })
  );
  app.use(passport.initialize());
  app.use(passport.session());

  app.use((req, res, next) => {
    if (req.user) {
      res.locals.currentUser = req.user;
    }
    next();
  });

  app.use(express.static('static'));
  app.use(express.static('node_modules'));

  console.log('Express ready!');
};
