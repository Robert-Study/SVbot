const mongoose = require('mongoose')

const logcountSchema = mongoose.Schema({
  UserID: {
    type: String,
    required: true,
  },

  timeLog: {
    type: Number,
    required: true,
  },
})

module.exports = mongoose.model('logcounts', logcountSchema)