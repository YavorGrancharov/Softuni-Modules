const User = require('mongoose').model('User');

async function getAllUsers() {
  return await User.find({ username: { $ne: 'Admin' } }).lean();
}

async function getCurrentlyLoggedIn(username) {
  return User.findOne({ username: { $eq: username } }).lean();
}

async function refillAmount(id, amount) {
  return User.findOneAndUpdate({ _id: id }, { $inc: { amount: amount } });
}

async function updateUserAmount(id, amount) {
  return User.updateOne({ _id: id }, { amount: amount });
}

async function getUserByUsername(username) {
  return User.findOne({ username: username }).lean();
}

module.exports = {
  getAllUsers,
  getCurrentlyLoggedIn,
  refillAmount,
  updateUserAmount,
  getUserByUsername
};
