const User = require('mongoose').model('User');
const encryption = require('../utils/encryption');
const usersApi = require('../api/users');

module.exports = {
  registerGet: (req, res) => {
    res.render('auth/register');
  },
  registerPost: (req, res) => {
    const user = req.body;
    const salt = encryption.generateSalt();
    const hashedPassword = encryption.generateHashedPassword(
      salt,
      user.password
    );

    User.create({
      username: user.username,
      amount: user.amount,
      expenses: user.expenses,
      salt: salt,
      hashedPass: hashedPassword,
    }).then((user) => {
      req.logIn(user, (err, user) => {
        if (err) {
          res.locals.Error = err;
          res.render('auth/register', user);
        }

        res.locals.Success = 'Регистрацията е успешна!';
        res.redirect('/');
      });
    });
  },
  loginGet: (req, res) => {
    res.render('auth/login');
  },
  loginPost: (req, res) => {
    let reqUser = req.body;

    User.findOne({
      username: reqUser.username,
    }).then((user) => {
      if (!user) {
        res.locals.Error = 'Невалидни потребителско име и/или парола!';
        res.render('auth/login');
        return;
      }

      if (!user.authenticate(reqUser.password)) {
        res.locals.Error = 'Невалидни потребителско име и/или парола!';
        res.render('auth/login');
        return;
      }

      req.logIn(user, (err, user) => {
        if (err) {
          res.locals.Error = err;
          res.render('auth/login');
        }

        res.locals.Success = 'Влязохте успешно!';

        res.redirect('/');
      });
    });
  },
  accountInfoGet: async (req, res) => {
    const username = req.user.username;
    const id = req.user.id;
    const user = await User.findById({ _id: id }).lean();
    const amount = user.amount;
    let totalAmount = 0;
    let totalMerches = 0;
    user.expenses.forEach((expense, index) => {
      totalAmount += Number(expense.total);
    });
    totalMerches = user.expenses.length;

    res.render('user/account-info', {
      username,
      totalAmount,
      totalMerches,
      amount,
    });
  },
  refillAmount: async (req, res) => {
    const refill = Number(req.body.refill);
    const id = req.user.id;
    await usersApi.refillAmount(id, refill);

    res.redirect('/');
  },
  logout: (req, res) => {
    req.logout();
    res.redirect('/');
  },
};
