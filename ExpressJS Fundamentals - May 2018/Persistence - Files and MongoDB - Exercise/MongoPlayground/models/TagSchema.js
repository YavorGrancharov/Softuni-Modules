const mongoose = require('mongoose')

const TagSchema = new mongoose.Schema({
    name: {type: mongoose.Schema.Types.String, required: true, unique: true},
    creationDate: {type: mongoose.Schema.Types.Date, required: true, default: Date.now},
    images: [{type: mongoose.Schema.Types.ObjectId}]
})

module.exports = mongoose.model('Tag', TagSchema)