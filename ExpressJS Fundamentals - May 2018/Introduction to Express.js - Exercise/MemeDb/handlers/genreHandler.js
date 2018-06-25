const Genre = require('./../models/Genre')

module.exports.addGenreGet = (req, res) => {
    res.render('addGenre')
}

module.exports.addGenrePost = (req, res) => {
    let genre = req.body

    Genre.create(genre).then((err) => {
        if (err) {
            console.log(err)
        }

        res.redirect('/')
    })
}