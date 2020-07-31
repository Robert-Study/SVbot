const mongoose = require('mongoose')

const messageCountSchema = mongoose.Schema({
  UserId: {
    type: String,
    required: true,
  },

  messageCount: {
    type: Number,
    required: true,
  },
})

module.exports = mongoose.model('message-counts', messageCountSchema)