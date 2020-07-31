const mongoose = require('mongoose')

const logcountSchema = mongoose.Schema({
  UserId: {
    type: String,
    required: true,
  },

  timeLog: {
    type: Number,
    required: true,
  },
})

module.exports = mongoose.model('logcounts', logcountSchema)