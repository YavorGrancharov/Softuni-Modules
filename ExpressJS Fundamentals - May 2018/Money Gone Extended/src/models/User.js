const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ecnryption = require('../utils/encryption');

let userSchema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    match: /(?=.*\d)(?=.*[a-z])(?=.*[A-Z])/,
    minlength: 8,
  },
  repeatPassword: {
    type: String,
    match: /(?=.*\d)(?=.*[a-z])(?=.*[A-Z])/,
    minlength: 8,
  },
  amount: {
    type: Number,
    default: 0,
  },
  expenses: [{
    type: Schema.Types.ObjectId,
    ref: 'Expenses'
  }],
  salt: String,
  hashedPass: String,
});

userSchema.method({
  authenticate: function (password) {
    return (
      ecnryption.generateHashedPassword(this.salt, password) === this.hashedPass
    );
  },
});

let User = mongoose.model('User', userSchema);

module.exports = User;
module.exports.seedAdminUser = () => {
  User.find({}).then((user) => {
    if (user.length > 0) {
      return;
    }

    let salt = ecnryption.generateSalt();
    let hashedPass = ecnryption.generateHashedPassword(salt, '123456');

    User.create({
      username: 'Admin',
      amount: 0,
      expenses: [],
      salt: salt,
      hashedPass: hashedPass,
      roles: ['Admin'],
    });
  });
};
