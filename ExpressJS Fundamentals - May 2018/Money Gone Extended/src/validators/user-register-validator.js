const { body } = require('express-validator');
const usersApi = require('../api/users');

module.exports = [
  body(
    'username',
    'Username should be at least 4 characters long and should consist only english letters and digits!'
  )
    .isLength({ min: 4 })
    .isAlphanumeric('en-US'),
  body('username').custom(async (username) => {
    const user = await usersApi.getUserByUsername(username);
    if (user) {
      throw new Error(
        'Username already exists, please choose another and try again!'
      );
    }
    return true;
  }),
  body('password', 'Password should be at least 8 characters long!').isLength({
    min: 8,
  }),
  body('repeat-password')
    .isLength({ min: 8 })
    .custom((value, { req }) => {
      if (value !== req.body.password) {
        throw new Error('Passwords did not match. Please try again!');
      }
      return true;
    }),
  body('amount', 'Amount should be a positive number')
    .isInt({ gt: -1 })
    .optional({ nullable: true }),
];
