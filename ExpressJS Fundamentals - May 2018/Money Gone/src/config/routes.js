const controllers = require('../controllers');
const auth = require('./auth');

module.exports = (app) => {
  app.get('/', controllers.home.index);

  app.get('/auth/register', controllers.user.registerGet);
  app.post('/auth/register', controllers.user.registerPost);

  app.get('/auth/login', controllers.user.loginGet);
  app.post('/auth/login', controllers.user.loginPost);

  app.post('/auth/logout', controllers.user.logout);

  app.get(
    '/expense/report/:id',
    auth.isAuthenticated,
    controllers.expenses.reportExpense
  );

  app.get(
    '/expense/new',
    auth.isAuthenticated,
    controllers.expenses.newExpenseGet
  );

  app.post(
    '/expense/new',
    auth.isAuthenticated,
    controllers.expenses.newExpensePost
  );

  app.post(
    '/expense/delete/:id',
    auth.isAuthenticated,
    controllers.expenses.deleteExpense
  );

  app.get(
    '/account/info',
    auth.isAuthenticated,
    controllers.user.accountInfoGet
  );

  app.post(
    '/account/refill',
    auth.isAuthenticated,
    controllers.user.refillAmount
  );

  app.all('*', (req, res) => {
    res.status(404);
    // res.render('basic/404.hbs');
    res.end('404 Not Found!');
    res.end();
  });
};
