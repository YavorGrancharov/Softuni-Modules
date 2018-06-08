const url = require('url')
const fs = require('fs')
const path = require('path')
const qs = require('querystring')
const formidable = require('formidable')
const util = require('util')
let shortid = require('shortid')

const database = require('../config/dataBase')
const memes = require('../db/db.json')

module.exports = (req, res) => {
  req.pathname = req.pathname || url.parse(req.url).pathname
  if (req.pathname === '/viewAllMemes' && req.method === 'GET') {
    let filePath = path.normalize(path.join(__dirname, '../views/viewAll.html'))

    fs.readFile(filePath, (err, data) => {
      if (err) {
        console.log(err)
        res.writeHead(404, {
          'Content-type': 'text/plain'
        })

        res.write('404 not found')
        res.end()
        return
      }

      let allMemes = memes
      allMemes = allMemes.sort(function (a, b) {
        return a.dateStamp - b.dateStamp
      })

      let content = ''
      for (let meme of allMemes) {
        content +=
          `<div class="meme">
            <a href="/getDetails?id=${meme.id}">
            <img class="memePoster" src="${meme.memeSrc}"/>
          </div>`
      }

      let html = data.toString().replace('{{replaceMe}}', content)

      res.writeHead(200, {
        'Content-type': 'text/html'
      })

      res.write(html)
      res.end()
    })
  } else if (req.pathname === '/addMeme' && req.method === 'GET') {
    let filePath = path.normalize(path.join(__dirname, '../views/addMeme.html'))

    fs.readFile(filePath, (err, data) => {
      if (err) {
        console.log(err)
        res.writeHead(404, {
          'Content-type': 'text/plain'
        })

        res.write('404 not found')
        res.end()
        return
      }

      res.writeHead(200, {
        'Content-type': 'text/html'
      })

      res.write(data)
      res.end()
    })
  } else if (req.pathname === '/addMeme' && req.method === 'POST') {
    const form = new formidable.IncomingForm
    let meme = {}

    form.parse(req, function(err, fields, files) {
      if (err) {
        console.log(err)
        return
      }

      res.writeHead(200, {
        'Content-type': 'text/plain'
      })
      res.write('Meme uploaded')
      res.end(util.inspect({fields: fields, files: files}))
    })

    form.on('end', function(fields, files) {
      let tempPath = this.openedFiles[0].path
      let fileName = this.openedFiles[0].name
      let newLocation = '../public/memeStorage'

      fs.copyFile(tempPath, newLocation + fileName,  function(err) {
        if (err) {
          console.log(err)
        } else {
          console.log('success')
          let newMeme = {
            id: shortid.generate(),
            title: fields.memeTitle,
            memeSrc: '',
            description: fields.memeDescription,
            privacy: fields.status === undefined ? 'off' : fields.status,
            dateStamp: Date.now()
          }

          fs.readFile(database, (err, data) => {
            if (err) {
              console.log(err)
              res.writeHead(404, {
                'Content-type': 'text/plane'
              })

              res.write('404 not found')
              res.end()
              return
            }

            let json = JSON.parse(data)
            json.push(newMeme)

            fs.writeFile(database, JSON.stringify(json), () => {
              res.writeHead(302, {
                'Location': '/'
              })

              res.end()
            })
          })
        }
      })
    })
    return
  } else if (req.pathname.startsWith('/getDetails') && req.method === 'GET') {
    const regex = /\/getDetails\?id=([^\s]+)/gm
    const memeId = regex.exec(req.url)[1]

    let filePath = path.normalize(path.join(__dirname, '../views/details.html'))

    fs.readFile(filePath, (err, data) => {
      if (err) {
        console.log(err)
        res.writeHead(404, {
          'Content-type': 'text/plain'
        })

        res.write('404 not found')
        res.end()
        return
      }

      let content = ''
      let meme = memes.filter(m => m.id === memeId)[0]

      content +=
        `<div class="content">
          <img src="${meme.memeSrc}" alt="">
          <h3>Title ${meme.title}</h3>
          <p>${meme.description}</p>
          <button><a href="${meme.posterSrc}">Download meme</a></button>
        </div>`


      let html = data.toString().replace("{{replaceMe}}", content)

      res.writeHead(200, {
        'Content-type': 'text/html'
      })

      res.write(html)
      res.end()
    })
  } else {
    return true
  }
}
