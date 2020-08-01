module.exports = {
    name: '19-message',
    description: "!code command that gives forest embed",
    execute(message, args){
        const messagecounter = require('../../getmessagecount')
        const target = message.mentions.users.first() || message.author
        const targetId = target.id

        const UserId = target.id

        const messages = await messagecounter.getmessageCount(UserId)
        message.send(`${target} has already written ${messages} messages on this server!`)}
};

