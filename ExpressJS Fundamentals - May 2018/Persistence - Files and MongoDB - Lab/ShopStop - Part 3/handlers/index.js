const homeHandler = require('./home')
const filesHandler = require('./static')
const productHandler = require('./product')
const categoryHandler = require('./category')

module.exports = [homeHandler, filesHandler, productHandler, categoryHandler]