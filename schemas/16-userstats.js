const mongoose = require('mongoose')

const userstatSchema = mongoose.Schema({
  UserID: {
    type: String,
    required: true,
  },

  warnings: {
    type: Number,
    required: false,
  },

  positive: {
      type: Number,
      required: false,
  },

  average: {
      type: Number,
      required: false, 
  },

  vctime: {
      type: Number,
      required: false,
  },

  modwarnings: {
      type: Number,
      required: false,
  }

})

module.exports = mongoose.model('16-userstats', userstatSchema)