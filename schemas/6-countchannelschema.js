const mongoose = require('mongoose')

const countchannelSchema = mongoose.Schema({
    UserId: {
        type: String,
        required: true,
      },
      
  messageCount: {
    type: Number,
    required: true,
  },
})

module.exports = mongoose.model('countchannel', countchannelSchema)