const mongoose = require('mongoose')

const tododataschema = mongoose.Schema({
    UserId: {
        type: String,
        required: true,
    },
      
    todocount: {
        type: Number,
        required: true,
    },

    todo: {
        type: String,
        required: true,
    }
})


module.exports = mongoose.model('todo-data', tododataschema)