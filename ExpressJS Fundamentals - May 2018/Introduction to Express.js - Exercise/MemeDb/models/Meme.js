const mongoose = require('mongoose')

const schema = mongoose.Schema({
    memeName: {type: mongoose.Schema.Types.String, required: true},
    dateOfCreation: {type: mongoose.Schema.Types.Date, required: true, default: Date.now},
    votes: {type: mongoose.Schema.Types.Number, default: 0},
    description: {type: mongoose.Schema.Types.String, required: true},
    title: {type: mongoose.Schema.Types.String, required: true},
    path: {type: mongoose.Schema.Types.String, required: true},
    status: {type: mongoose.Schema.Types.Boolean, default: false}
})

let Meme = mongoose.model('meme', schema);

module.exports = Meme;