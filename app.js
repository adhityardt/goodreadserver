require('dotenv').config()
const express  = require('express')
const mongoose = require('mongoose')
const cors     = require('cors')
const logger = require('morgan')
mongoose.connect('mongodb://good-read:read-good@ds233970.mlab.com:33970/good-read')

const indexRouter = require('./routes/index')
const usersRouter = require('./routes/users')
const imagesRouter = require('./routes/images')

const app = express()

app.use(cors())
app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use('/', indexRouter)
app.use('/users', usersRouter)
app.use('/images', imagesRouter)

app.listen(3000, () => {
  console.log('connected on port 3000')
})