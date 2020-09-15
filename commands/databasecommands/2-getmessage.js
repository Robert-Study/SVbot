module.exports = {
    commands: ['message'],
    minArgs: 0,
    maxArgs: 1,
    callback: async (message, arguments, text) => {
        const messageCountSchema = require('../../schemas/12-messagecount')
        const target = message.mentions.users.first() || message.author
        const UserId = target.id

        const result = await messageCountSchema.findOne({
            UserId,
        })

        let messageCount = 0

        if (result) {
            messageCount = result.messageCount
            message.reply(`you have already written ${messageCount} messages on this server!`)
        } else {
            console.log('No messages for this user')
        }
    }
}
