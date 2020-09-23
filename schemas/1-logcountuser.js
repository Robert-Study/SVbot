const mongoose = require('mongoose')

const logcountSchema = mongoose.Schema({
    GuildID: {
        type: String,
        required: true,
    },

    UserID: {
        type: String,
        required: true,
    },

    daily: {
        type: Number,
        required: false,
    },

    weekly: {
        type: Number,
        required: false,
    },

    monthly: {
        type: Number,
        required: false,
    },

    alltime: {
        type: Number,
        required: false,
    }
})

module.exports = mongoose.model('1-logcountuser', logcountSchema)