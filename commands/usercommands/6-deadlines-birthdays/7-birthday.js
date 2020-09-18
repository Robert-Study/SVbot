module.exports = {
    commands: ['birthday', 'bd'],
    minArgs: 0,
    expectedArgs: '<!bdremove>',

    callback: async (message, arguments, text) => {
        var moment = require('moment');
        const bdSchema = require('@schemas/13-birthdayschema')

        const mention = message.author
        const UserID = mention.id

        let result = await bdSchema.findOne(
            {
                UserID: `${UserID}`
            })
        if (results) {
            for (items of results) {
                let birthday = items.date


                let fromnow = moment(`${birthday}`, "DD/MM").fromNow();
                message.reply(`Your birthday is on the ${birthday} which is ${fromnow}`)
            }
        } else { message.reply('could not find a birthday for you, please use !bdadd DD/MM to add your birthday!') }
    }
}
