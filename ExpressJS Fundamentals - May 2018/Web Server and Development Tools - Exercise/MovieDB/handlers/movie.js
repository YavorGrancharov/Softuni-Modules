const url = require('url')
const fs = require('fs')
const path = require('path')
const qs = require('querystring')
const multiparty = require('multiparty')

const database = require('../config/dataBase')

const detailsReg = /\/movies\/details\/([^\s]+)/gm

module.exports = (req, res) => {
    req.pathname = req.pathname || url.parse(req.url).pathname

    if (req.pathname === '/viewAllMovies' && req.method === 'GET') {
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

            let allMovies = database

            allMovies = allMovies.map((m, i) => {
                m.id = i
                return m
            }).sort((a, b) => b.movieYear - a.movieYear)

            let movie = ''
            for (const index in allMovies) {
                movie +=
                    `<div class="movie">
                        <a href="movies/details/${allMovies[index].id}">
                            <img class="moviePoster" src="${decodeURIComponent(allMovies[index].moviePoster)}"/>
                        </a>          
                    </div>`
            }

            let html = data.toString().replace('{{movie}}', movie)

            res.writeHead(200, {
                'Content-type': 'text/html'
            })

            res.write(html)
            res.end()
        })
    }

    if (req.pathname === '/addMovie' && req.method === 'GET') {
        let filePath = path.normalize(path.join(__dirname, '../views/addMovie.html'))

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
    } else if (req.pathname === '/addMovie' && req.method === 'POST') {
        let movie = []

        req.on('data', (data) => {
            movie.push(data)
        }).on('end', () => {
            movie = Buffer.concat(movie).toString()

            let newMovie = qs.parse(movie)
            let valid = !newMovie.movieTitle || !newMovie.moviePoster
            let filePath = path.normalize(path.join(__dirname, '../views/addMovie.html'))

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
                if (valid) {
                    content += '<div id="errBox"><h2 id="errMsg">Please fill all fields</h2></div>'
                } else {
                    database.push(newMovie)
                    content += '<div id="succssesBox"><h2 id="succssesMsg">Movie Added</h2></div>'
                }
                database.push(newMovie)
                let html = data.toString().replace('{{newMovie}}', content)

                res.writeHead(200, {
                    'Content-type': 'text/html'
                })

                res.write(html)
                res.end()
            })
        })
    }

    if (detailsReg.test(req.pathname) && req.method === 'GET') {
        detailsReg.lastIndex = 0
        let extract = detailsReg.exec(req.pathname)
        let id = extract[1]

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
            let movieDetails = database[id]
            content +=
                `<div class="content">
                    <img src="${decodeURIComponent(movieDetails.moviePoster)}" alt=""/>
                    <h3>Title  ${decodeURIComponent(movieDetails.movieTitle)}</h3>
                    <h3>Year ${decodeURIComponent(movieDetails.movieYear)}</h3>
                    <p> ${decodeURIComponent(movieDetails.movieDescription)}</p>
                </div>`

            let html = data.toString().replace('{{movieDetails}}', content)

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