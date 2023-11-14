const allowedOrigin = require('./configs/allowedOrigin')

const express = require('express')
const app = express()

const cors = require('cors')

const PORT = 3500

app.use(express.json())
console.log(allowedOrigin)

app.use(
  cors({
    credentials: true,
    origin: allowedOrigin,
  })
)

app.get('/', (req, res) => {
  res.status(200).json({ message: 'This is a message from express server!!' })
})

app.listen(PORT, console.log(`Server running on ${PORT}.`))
