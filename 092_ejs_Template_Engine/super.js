const express = require('express')
const app = express()
const port = 3000


app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    const variable1 = "Hello -ejs"
    const arr = ["item1", "item2", "item3"]
    res.render("primary", { v1: variable1, arr}) 
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})