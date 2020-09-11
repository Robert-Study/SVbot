const mongoose = require('mongoose')

const todoCountSchema = mongoose.Schema({
    UserId: {
        type: String,
        required: true,
    },
      
    messageCount: {
        type: Number,
        required: true,
    }
})

module.exports = mongoose.model('todo-counts', todoCountSchema)