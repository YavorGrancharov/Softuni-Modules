const Meme = require('./../models/Meme')
const Genre = require('./../models/Genre')

module.exports.addMemeGet = (req, res) => {
  Genre.find({}, (err, allGenres) => {
    res.renger('addMeme', { genres: allGenres })
  })
}

module.exports.addMemePost = (req, res) => {
  let meme = req.body

  let extention = req.file.originalname.substr(req.file.originalname.indexOf('.'))

  meme.path = '.' + req.file.destination.substr(req.file.destination.indexOf('./../public'))
    .concat(req.file.filename)

    meme.status = req.body.status === 'on'

    Meme.create(meme).then((createMeme) => {
      Genre.findOneAndUpdate(
        {'genreName': meme.genres},
        {'$push': {'memeList': createMeme._id}},
        function (err, undef) {
          if (err) {
            console.log(err)
          }  
        }
      )
      res.redirect('/')
    })
}

module.exports.viewAll = (req, res) => {
  Meme.find({}, (err, allMemes) => {
    res.render('viewAll', {memes: allMemes})
  })
}

module.exports.getDetails = (req, res) => {
  let queryId = req._parseUrl['query'].substr(3)

  Meme.find({_id: queryId}, (err, foundMeme) => {
    res.render('details', {foundMeme: foundMeme})
  })
}

module.exports.deleteMeme = (req, res) => {
  let memeId = req.body.id

  Meme.remove({_id: memeId}, function(err) {
    if (err) {
      console.log(err)
      res.json({'result': 'fail'})
    }

    res.json({'result': 'success'})
  })
}