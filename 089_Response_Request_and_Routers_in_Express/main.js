const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.post('/', (req, res) => {
    res.send('Post request received!')
})
app.put('/', (req, res) => {
    res.send('Put request received!')
})
app.delete('/', (req, res) => {
    res.send('Delete request received!')
})


app.get('/', (req, res) => {
  res.sendFile('./index.html', { root: __dirname })
})

app.get('/', (req, res) => {
  res.json({x:1, y:2});
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

//browsers by default use get request


//sendingFiles
app.get('/files' , (req, res)=>{
    res.download('./templates/index.html', { root: __dirname })
})