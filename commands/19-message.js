module.exports = {
    name: '1-cal',
    description: "calendar command",
    execute (message,args) {
        const messagecounter = require('../../getmessagecount')
        const target = message.mentions.users.first() || message.author
        const targetId = target.id

        const UserId = target.id

        const messages = async(UserId) => { await messagecounter.getmessageCount(UserId)}
        message.send(`${target} has already written ${messages} messages on this server!`)}
    }
