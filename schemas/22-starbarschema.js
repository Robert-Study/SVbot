const mongoose = require('mongoose')

const starbarschema = mongoose.Schema({
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

    ticker: {
        type: Number,
        required: false,
    },

})

module.exports = mongoose.model('22-starbarschema', starbarschema)