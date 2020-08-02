module.exports.getmessage = async (message, args) => {
                const messagecounter = require('./getmessagecount')
                const target = message.mentions.users.first() || message.author
                const targetId = target.id

                const UserId = target.id

                let messages = await messagecounter.getmessageCount(UserId)
                message.reply(`you have already written ${messages} messages on this server!`)
}


