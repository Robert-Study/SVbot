module.exports = {
  commands: ['deletedl', 'deletedeadlines'],
  minArgs: 0,
  maxArgs: 0,
  callback: async (message, arguments, text) => {

    const deadlineSchema = require('../../schemas/3-deadlineschema')
    const target = message.mentions.users.first() || message.author
    const UserID = target.id

    console.log('Connected to mongodb!')

    await deadlineSchema.deleteOne({
      UserID,
    })

    message.reply(`I have deleted your oldest submitted Deadline!`)
  }
}


