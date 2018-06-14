const Book = require('../data/Book')

module.exports = {
    getBook: (req, res) => {
        res.render('books/addBook')
    },
    postBook: (req, res) => {
        let book = req.body

        if (!book.title || !book.imageURL) {
            book.error = 'Title and image URL are required!'
            res.render('books/addBook', book)
        }

        book.releaseDate = new Date(book.releaseDate)

        Book.create(book).then(() => {
            res.redirect('/viewAll')
        })
    },
    getAll: (req, res) => {
        Book.find().sort('-releaseDate').then(books => {
            res.render('books/viewAll', {books})
        })
    },
    details: (req, res) => {
        const id = req.params.id

        Book.findById(id).then(book => {
            res.render('books/details', book)
        })
    }
}