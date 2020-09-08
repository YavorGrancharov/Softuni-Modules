const mongoose = require('mongoose');
const User = require('./User');
const Schema = mongoose.Schema;

let expenseSchema = new Schema({
  merchandise: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    required: true,
    default: Date.now(),
  },
  total: {
    type: Number,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
    minlength: 10,
  },
  report: {
    type: Boolean,
    required: true,
    default: false,
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User',
  },
});

let Expense = mongoose.model('Expense', expenseSchema);

module.exports = Expense;
