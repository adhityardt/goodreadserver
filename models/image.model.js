const mongoose = require('mongoose')

const imageSchema = mongoose.Schema({
  title: String,
  author: String,
  url: String,
  description: String,
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }
}, {
  timestamps: true
})

const Image = mongoose.model('Image', imageSchema)

module.exports = Image