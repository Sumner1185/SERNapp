const express = require('express')
const bodyParser = require('body-parser')
const compression = require('compression')
const cors = require('cors')
const helmet = require('helmet')

const carsRouter = require('./routes/cars-route')

const PORT = process.env.PORT || 4000

const app = express()

app.use(cors())
app.use(helmet())
app.use(compression())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use('/api/cars', carsRouter)

app.listen(PORT, function() {
    console.log(`Server is running on: ${PORT}`)
})