const expensesApi = require('../api/expenses');
const usersApi = require('../api/users');

const { validationResult } = require('express-validator');

module.exports = {
  newExpenseGet: (req, res) => {
    const username = req.user.username;
    res.render('expenses/new-expense', { username });
  },
  newExpensePost: async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      const body = req.body;
      const error = errors.array()[0].msg;
      const username = req.user.username;
      return res.render('expenses/new-expense', { username, error, body });
    }

    const expense = req.body;
    const id = req.user.id;
    let amount = Number(req.user.amount);

    if (req.body.report === 'on') {
      expense.report = true;
    } else {
      expense.report = false;
    }

    expense.user = id;
    amount -= Number(expense.total);
    await usersApi.updateUserAmount(id, amount);
    await expensesApi.createExpense(expense, id);

    res.redirect('/');
  },
  reportExpense: async (req, res) => {
    const id = req.params.id;
    const username = req.user.username;
    const report = await expensesApi.getExpenseById(id);

    res.render('expenses/report', { username, report });
  },
  deleteExpense: async (req, res) => {
    const id = req.params.id;
    await expensesApi.deleteExpense(id);

    res.redirect('/');
  },
};
