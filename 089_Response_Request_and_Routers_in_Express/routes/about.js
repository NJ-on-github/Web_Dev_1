const express = require('express')
const router = express. Router()

// define the home page route
router.get('/', (req, res) => {
res.send('This is /')
})
router.get('/about', (req, res) => {
res.send('This is /about')
})
// define the about route
router.get('/about/me', (req, res) => {
res.send('About me')
})
router.get('/about/them', (req, res) => {
res.send('About them')
})
module.exports = router