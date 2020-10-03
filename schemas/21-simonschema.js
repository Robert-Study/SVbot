const mongoose = require('mongoose')

const simonSchema = mongoose.Schema({
    GuildID: {
        type: String,
        required: true,
    },

    UserID: {
        type: String,
        required: true,
    },

    number: {
        type: Number,
        required: false,
    },

    wrong: {
        type: Number,
        required: false,
    },

    time: {
        type: String,
        required: false,
    },


})

module.exports = mongoose.model('21-simonschema', simonSchema)