const mongoose = require('mongoose')

const totalstudytimeSchema = mongoose.Schema({
  UserID: {
    type: String,
    required: true,
  },

  timeLog: {
    type: Number,
    required: true,
  },
})

module.exports = mongoose.model('studytime', totalstudytimeSchema)