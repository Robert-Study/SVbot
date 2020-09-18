const mongoose = require('mongoose')

const habitschema = mongoose.Schema({
  UserID: {
    type: String,
    required: true,
  },

  guild: {
    type: String,
    required: true,
  },

  savedate: {
    type: String,
    required: true,
  },

  number: {
      type: Number,
      required: true, 
  }
})

module.exports = mongoose.model('15-birthdays', habitschema)