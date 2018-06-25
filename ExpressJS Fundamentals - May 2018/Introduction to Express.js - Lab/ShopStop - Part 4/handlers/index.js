const homeHandler = require('./home')
//const filesHandler = require('./static')
const productHandler = require('./product')
const categoryHandler = require('./category')

module.exports = {
    home: homeHandler, 
    product: productHandler, 
    category: categoryHandler
}