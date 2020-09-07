const User = require('mongoose').model('User');
const Expense = require('mongoose').model('Expense');

async function getUserExpenses(id) {
  const expenses = await Expense.find({
    user: id,
  })
    .lean()
    .exec();

  if (expenses) {
    return expenses;
  } else {
    return {};
  }
}

async function createExpense(expense, id) {
  const newExpense = await Expense.create(expense);

  await User.updateOne({ _id: id }, { $push: { expenses: expense } });

  return newExpense;
}

async function getExpenseById(id) {
  const report = await Expense.findById({ _id: id }).lean();

  return report;
}

async function deleteExpense(id) {
  return Expense.deleteOne({_id: id});
}

module.exports = {
  createExpense,
  getUserExpenses,
  getExpenseById,
  deleteExpense
};
