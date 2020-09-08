const { body } = require('express-validator');

module.exports = [
  body('merchandise', 'Merchant should be at least 4 symbols long!').isLength({
    min: 4,
    max: 20,
  }),
  body('total', 'Total should be a positive number!').isInt({ gt: 0 }),
  body('category').custom((value) => {
    if (value === undefined) {
      throw new Error('Category is required. Please choose one!');
    }
    return true;
  }),
  body(
    'description',
    'Description should be between 10 and 50 characters!'
  ).isLength({ min: 10, max: 50 }),
];
