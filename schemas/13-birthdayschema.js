const mongoose = require('mongoose')

const birthdayschema = mongoose.Schema({
  UserID: {
    type: String,
    required: true,
  },

  guild: {
    type: String,
    required: true,
  },

  date: {
    type: String,
    required: true,
  },
  
})

module.exports = mongoose.model('13-birthdays', birthdayschema)