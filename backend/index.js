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
app.use('/api/operations', require('./routes/operations'))

// Server Start Here

app.get('/', (req, res) => {
  res.send('hello world this is american-express backend server.')
})

app.listen(port, () => {
    console.log(`American Express App listening at http://localhost:${port}`)
  })
