const messagecounter = require('../getmessagecount')
const target = message.mentions.users.first() || message.author
const UserId = target.id

module.exports.getmessage = async (UserId) => {
        let messages = await messagecounter.getmessageCount(UserId)
        message.reply(`you have already written ${messages} messages on this server!`)
}


