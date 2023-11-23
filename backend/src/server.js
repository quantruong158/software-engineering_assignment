const express = require('express')
const cors = require('cors')
const allowedOrigin = require('./configs/allowedOrigin')
const app = express()
const mongoose = require('mongoose')
var bodyParser = require('body-parser')
const morgan = require('morgan')
const dotenv = require('dotenv')
const printerRoute = require('./routes/printerRoute')
const authRoute = require('./routes/authRoute')
const printRoute = require('./routes/printRoute')

dotenv.config() // do for .env file
//CONNECT DATABASE
mongoose
  .connect(process.env.MONGODB_URL) // use .env file
  .then((success) => console.log('Connect Successfully to MongoDB'))
  .catch((err) => console.log(err.message))

app.use(bodyParser.json({ limit: '50mb' }))
app.use(
  cors({
    credentials: true,
    origin: allowedOrigin,
  })
) // deter from cross origin restriction error
app.use(morgan('common')) // khi send API request -> inform in terminal

//ROUTE
app.use('/v1/printer', printerRoute)
app.use('/v1/auth', authRoute)
app.use('/print', printRoute)

app.listen(3500, () => {
  console.log('server is running ...')
})
