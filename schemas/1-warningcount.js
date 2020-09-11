const mongoose = require('mongoose')

const warnCountschema = mongoose.Schema({
  UserID: {
    type: String,
    required: true,
  },

  warnings: {
    type: Number,
    required: true,
  },
})

module.exports = mongoose.model('warncounts', warnCountschema)