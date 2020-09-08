const controllers = require('../controllers');
const expenseValidator = require('../validators/add-expense-validator');
const refillAmountValidator = require('../validators/refill-amount-validator');
const userRegisterValidator = require('../validators/user-register-validator');
const userLoginValidator = require('../validators/user-login-validator');
const auth = require('./auth');

module.exports = (app) => {
  app.get('/', controllers.home.index);

  app.get('/auth/register', controllers.user.registerGet);
  app.post(
    '/auth/register',
    userRegisterValidator,
    controllers.user.registerPost
  );

  app.get('/auth/login', controllers.user.loginGet);
  app.post('/auth/login', userLoginValidator, controllers.user.loginPost);

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
    expenseValidator,
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
    refillAmountValidator,
    auth.isAuthenticated,
    controllers.user.refillAmount
  );

  app.all('*', controllers.home.notFound);
};
