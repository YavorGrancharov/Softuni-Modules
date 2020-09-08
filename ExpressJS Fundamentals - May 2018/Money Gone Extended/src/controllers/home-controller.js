const expensesApi = require('../api/expenses');
const mongoose = require('mongoose');

module.exports = {
  index: async (req, res) => {
    if (!req.user) {
      res.render('index');
      return;
    } else {
      const username = req.user.username;
      const id = mongoose.Types.ObjectId(req.user.id);
      const expenses = await expensesApi.getUserExpenses(id);
      if (!expenses) {
        res.render('index', { username });
        return;
      } else {
        res.render('index', { username, expenses });
      }
    }
  },
  notFound: (req, res) => {
    if (!req.user) {
      res.render('basic/404');
      return;
    }
    const username = req.user.username;

    res.render('basic/404', { username });
  },
};
