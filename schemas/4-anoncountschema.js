const mongoose = require('mongoose')

const annonCountSchema = mongoose.Schema({
  messageCount: {
    type: Number,
    required: true,
  },
})

module.exports = mongoose.model('anon-counts', annonCountSchema)