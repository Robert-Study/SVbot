const messagecounter = require('../getmessagecount')

module.exports.getmessage = async (UserId) => {
        const target = message.mentions.users.first() || message.author
        const UserId = target.id

        let messages = await messagecounter.getmessageCount(UserId)
        message.reply(`you have already written ${messages} messages on this server!`)
}


