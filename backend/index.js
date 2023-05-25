const connectToMongo = require('./db');
const express = require('express')
var cors = require('cors')

connectToMongo();

const app = express()
const port = 5000
app.use(cors())
app.use(express.json());

// Routers Section starts here
app.use('/api/auth', require('./routes/auth'))

// Server Start Here

app.get('/', (req, res) => {
  res.send('hello world this is american-express backend server.')
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
  })
