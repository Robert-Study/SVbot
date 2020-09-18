const mongoose = require('mongoose')

const lockdataschema = mongoose.Schema({

    UserID: {
        type: String,
        required: true,
    },

    guild: {
        type: String,
        required: true,
    },

    starttime: {
        type: String,
        required: true,
    },

    endtime: {
        type: String,
        required: true,
    },
})

module.exports = mongoose.model('14-lockdata', lockdataschema)