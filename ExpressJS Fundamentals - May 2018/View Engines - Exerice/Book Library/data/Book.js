const mongoose = require('mongoose')

const bookSchema = new mongoose.Schema({
    title: {type: mongoose.Schema.Types.String, required: true},
    author: {type: mongoose.Schema.Types.String, required: true, unique: true},
    releaseDate: {type: mongoose.Schema.Types.Date, required: true, default: Date.now},
    imageURL: {type: mongoose.Schema.Types.String, required: true}
})

mongoose.model('Book', bookSchema)

module.exports = mongoose.model('Book', bookSchema)