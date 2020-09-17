const mongoose = require('mongoose')

const eventSchema = mongoose.Schema({
    UserId: {
        type: String,
        required: true,
    },

    guildID: {
        type: String,
        required: true,
    },

    date: {
        type: String,
        required: true,
    },

    time: {
        type: String,
        required: true,
    },

    header: {
        type: String,
        required: true,
    },

    description: {
        type: String,
        required: true,
    },

    barcode: {
        type: Number,
        required: true,
    },

    colorcount: {
        type: Number,
        required: true,
    }
})

module.exports = mongoose.model('11-events', eventSchema)