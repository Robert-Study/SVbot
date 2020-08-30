const mongoose = require('mongoose')

const deadlineSchema = mongoose.Schema({
  UserID: {
    type: String,
    required: true,
  },

  date: {
    type: String,
    required: true,
  },

  dltext: {
    type: String,
    required: true,
  },
})

module.exports = mongoose.model('deadlines', deadlineSchema)