const { body } = require('express-validator');
const usersApi = require('../api/users');

module.exports = [
  body('username').custom(async (username) => {
    const user = await usersApi.getUserByUsername(username);
    if (!user) {
      throw new Error('Username and/or password are incorrect, please try again or Register!');
    }
    return true;
  }),
  body('password', 'Password should be at least 8 characters long!').isLength({
    min: 8,
  }),
];
