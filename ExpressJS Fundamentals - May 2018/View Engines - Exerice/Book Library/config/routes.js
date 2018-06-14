const homeController = require('../controllers/home')
const bookController = require('../controllers/book')

module.exports = (app) => {
    app.get('/', homeController.getIndex)
    app.get('/addBook', bookController.getBook)
    app.post('/addBook', bookController.postBook)
    app.get('/viewAll', bookController.getAll)
    app.get('/details/:id', bookController.details)
}