module.exports = {
    commands: ['stat', 'warnstats'],
    minArgs: 1,
    maxArgs: 1,
    permissions: 'BAN_MEMBERS',

    callback: async (message, arguments, text) => {
        var person = message.guild.member(message.mentions.users.first());
        if (!person) return message.reply("I CANT FIND THE USER " + person);
        let user = person.id

        const warningcountSchema = require('@schemas/1-warningcount')
        const messageCountSchema = require('@schemas/12-messagecount')


        let warningcount = await warningcountSchema.findOne({
            UserID: person
        })

        let count = warningcount.warnings
        console.log(count)

        let messages = await messageCountSchema.findOne({
            UserId: user
        })

        console.log(messages)


        let messagecount = messages.messageCount
        console.log(messagecount)



        let average = (messagecount / count)
        console.log(average)

        message.reply(`Warning stats for this user: ${average}`)

    }
}





