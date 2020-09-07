const User = require('../models/User');

const Users = require('mongoose').model('User');

async function getAllUsers() {
  return await Users.find({ username: { $ne: 'Admin' } }).lean();
}

async function getCurrentlyLoggedIn(username) {
  return Users.findOne({ username: { $eq: username } }).lean();
}

async function refillAmount(id, amount) {
  return User.findOneAndUpdate({ _id: id }, { $inc: { amount: amount } });
}

async function updateUserAmount(id, amount) {
  return User.updateOne({ _id: id }, { amount: amount });
}

module.exports = {
  getAllUsers,
  getCurrentlyLoggedIn,
  refillAmount,
  updateUserAmount,
};
