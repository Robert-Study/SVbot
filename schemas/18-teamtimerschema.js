const mongoose = require('mongoose')

const forestSchema = mongoose.Schema({
    GuildID: {
        type: String,
        required: true,
    },

    color: {
        type: String,
        required: false,
    },

    taken: {
        type: Number,
        required: false,
    },

    remaining: {
        type: Number,
        required: false,
    },

    time: {
        type: String,
        required: false,
    },

    endtime: {
        type: String,
        required: false,
    },

})

module.exports = mongoose.model('18-foresttimers', forestSchema)