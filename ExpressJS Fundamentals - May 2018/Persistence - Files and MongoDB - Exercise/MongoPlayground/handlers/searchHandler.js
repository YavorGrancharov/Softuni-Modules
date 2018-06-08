const fs = require('fs')
const ImageSchema = require('mongoose').model('ImageSchema')

module.exports = (req, res) => {
  if (req.pathname === '/search') {
    fs.readFile('./views/results.html', 'utf8', (err, html) => {
      if (err) {
        throw(err)
      }

      ImageSchema.find({}).then(data => {
        let imageHtml = ''
        for (let image of data) {
          imageHtml += 
            `<fieldset id="${image._id}">
            <img src="${image.url}"></img>
            <p>${image.description}</p>
            <button onclick='location.href="/delete?id=${image._id}"' class='deleteBtn'>Delete</button>
            </fieldset>`
        }
        html = html.toString().replace('<div class="replaceMe"></div>', imageHtml)

        res.writeHead(200, {
          'Content-type': 'text/html'
        })

        res.write(html)
        res.end()
      })
    })
  } else {
    return true
  }
}
