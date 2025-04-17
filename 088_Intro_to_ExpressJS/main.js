const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

app.get('/blog/:slug', (req, res) => {
  // logic to fetch {slug} from the db
  // For URL: http://localhost:3000/blog/intro-to-padosi?mode=dark&region=in
  // console.log("req.params -> " + req.params) // will output { slug: 'intro-to-padosi' }
  // console.log("req.query -> "+ req.query) // will output { slug: 'intro-to-padosi'
  console.log(req.params) // will output { slug: 'intro-to-padosi' }
  console.log(req.query) // will output { slug: 'intro-to-padosi'
  res.send(`hello ${req.params.slug}`)
  });

// for url "http://localhost:3000/blog/hh?mode=%22dark%22&20y=2", we get:
// [Object: null prototype] { slug: 'hh' }
// [Object: null prototype] { mode: '"dark"', '20y': '2' }