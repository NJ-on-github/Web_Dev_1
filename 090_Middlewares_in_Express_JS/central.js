const express = require('express')
const app = express()
const port = 3000
const fs = require('fs')

app.use(express.static('public')) // Serve static files from the 'public' directory

// This is app level middleware
//Middleware 1
app.use((req, res, next) => {
  console.log('Middleware 1: Request received')
  // res.send('Hello from Middleware 1') // This would end the request and not call the next middleware
  console.log(`request at time ${new Date().toISOString()} with method ${req.method} and url ${req.url}`)
  fs.appendFileSync("log.txt", `request at time ${new Date().toISOString()} with method ${req.method} and url ${req.url}\n`);
  //adding data to req object and later receive it in any get or post request
  //req is an object that represents the HTTP request and has properties for the request query string, parameters, body, HTTP headers, etc.
  req.myCustomData = 'This is some my Custom data';
  next() // Call the next middleware in the stack
  //without next() the request will hang and not proceed to the next middleware or route handler
})

//Middleware 2
app.use((req, res, next) => {
  console.log('Middleware 2: Processing request')
  next() // Call the next middleware in the stack
})

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

//all types of middlewares
// Application-level middleware
// Router-level middleware
// Error-handling middleware
// Built-in middleware
// Third-party middleware

// https://expressjs.com/en/guide/using-middleware.html