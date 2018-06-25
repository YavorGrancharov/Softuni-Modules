const mongoose = require('mongoose')

const schema = mongoose.Schema({
    genreName: {type: mongoose.Schema.Types.String, required: true, unique: true},
    memeList: [{type: mongoose.Schema.Types.ObjectId, ref: 'meme'}]
})

let Genre = mongoose.model('genre', schema);

module.exports = Genre;