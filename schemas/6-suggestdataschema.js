const mongoose = require('mongoose')

const suggestdataSchema = mongoose.Schema({
    UserId: {
        type: String,
        required: true,
    },
      
    suggestcount: {
        type: Number,
        required: true,
    },

    suggestion: {
        type: String,
        required: true,
    }
})

module.exports = mongoose.model('suggest-data', suggestdataSchema)