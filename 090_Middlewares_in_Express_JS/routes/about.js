const express = require('express')
const router = express.Router()

// This is a router level middleware
// middleware that is specific to this router
router.use((req, res, next) => {
    console.log('Time: ', Date.now())
    next()
})

// define the home page route
router.get('/', (req, res) => {
    res.send('About or Birds home page')
})
// define the about route
router.get('/tests', (req, res) => {
    res.send('About tests')
})

module.exports = router;