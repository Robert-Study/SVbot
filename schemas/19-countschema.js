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
        type: String,
        required: false,
    },

    save: {
        type: String,
        required: false,
    },


})

module.exports = mongoose.model('20-countschema', countSchema)