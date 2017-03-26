const bodyParser = require('body-parser')
const express = require('express')
const app = express()

const PORT = process.env.PORT || 8080
const book = require('./routes/book.js')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))

app.use('/book', book)

app.listen(PORT, function() {
  console.log(`Listening on port ${PORT} for server #2`)
})
