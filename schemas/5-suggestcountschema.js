const mongoose = require('mongoose')

const suggestCountSchema = mongoose.Schema({
    UserId: {
        type: String,
        required: true,
    },
      
    messageCount: {
        type: Number,
        required: true,
    },

    suggestion: {
        type: String,
        required: true,
    }
})

module.exports = mongoose.model('suggest-counts', suggestCountSchema)