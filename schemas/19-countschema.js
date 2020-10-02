const mongoose = require('mongoose')

const countSchema = mongoose.Schema({
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

    gameresc: {
        type: Number,
        required: false,
    },

    lastuser: {
        type: String,
        required: false,
    },


})

module.exports = mongoose.model('19-countschema', countSchema)