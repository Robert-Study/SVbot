module.exports = {
    commands: ['deletedl', 'deletedeadlines'],
    minArgs: 0,
    maxArgs: 0,
    callback: async(message, arguments, text) => {
        const mongo = require('../../mongo')
        const deadlineSchema = require('../../schemas/3-deadlineschema')
        const target = message.mentions.users.first() || message.author
        const UserID = target.id

    await mongo().then(async (mongoose) => {
            try {
            console.log('Connected to mongodb!')

            await deadlineSchema.deleteOne({
            UserID,
            })
    } finally {
      mongoose.connection.close()
      message.reply(`I have deleted your oldest submitted Deadline!`)
    }
})
}
}


