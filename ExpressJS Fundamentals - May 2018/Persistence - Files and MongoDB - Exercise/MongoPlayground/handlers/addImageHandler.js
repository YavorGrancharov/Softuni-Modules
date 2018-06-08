const formidable = require('formidable')
const ImageSchema = require('mongoose').model('ImageSchema')
const ObjectId = require('mongoose').Types.ObjectId

module.exports = (req, res) => {
  if (req.pathname === '/addImage' && req.method === 'POST') {
    const form = new formidable.IncomingForm()

  form.parse(req, (err, fields, files) => {
    if (err) {
      throw(err)
    }
    fields.tagsId.split(',').reduce((p, c, i, a) => {
      if (p.includes(c) || c.length === 0) {
        return p
      } else {
        p.push(c)
        return p
      }
    }, []).map(ObjectId)
    
    const image = {
      url: fields.imageUrl,
      description: fields.description,
      tags: []
    }

    ImageSchema.create(image).then(image => {
      res.writeHead(302, {
        'Location': '/'
      })
      res.end()
    }).catch(err => {
      res.writeHead(500, {
        'Content-type': 'text/plain'
      })
      res.write('500 Server Error')
      res.end()
    })
  })
} else if (req.pathname === '/delete' && req.method === 'GET') {
    console.log(req.pathquery)
    ImageSchema.deleteOne({_id: req.pathquery.id}).then(() => {
      res.writeHead(302, {
        'Location': '/'
      })
      res.end()
    }).catch(err => {
      throw err
    })
  } else {
    return true
  }
}