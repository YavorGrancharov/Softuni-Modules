const { body } = require('express-validator');

module.exports = [
  body('refill', 'Refill should be a positive number!').isInt({ gt: 0 }),
];
