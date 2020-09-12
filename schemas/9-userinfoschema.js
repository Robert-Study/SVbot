const mongoose = require('mongoose')

const userinfoschema = mongoose.Schema({
    UserId: {
        type: String,
        required: true,
    },
      
    place: {
        type: String,
        required: true,
    },

    setQuote: {
        type: String,
        required: true,
    },

    setForecast:{
        type: String,
        required: true,
    }
})


module.exports = mongoose.model('user-data', userinfoschema)