module.exports = {
    commands: ['stat', 'warnstats'],
    minArgs: 1,
    maxArgs: 1,
    permissions: 'BAN_MEMBERS',

    callback: async (message, arguments, text) => {
        var person = message.guild.member(message.mentions.users.first());
        if (!person) return message.reply("I CANT FIND THE USER " + person);
        let user = person.id

        const warningcountSchema = require('@schemas/16-userstats')
        const messageCountSchema = require('@schemas/12-messagecount')

        const results = await warningcountSchema
            .findOneAndUpdate(
                {
                    UserID: person,
                },
                {
                    $inc: {
                        positive: 0.1,
                        modwarnings: 0.1,
                        warnings: 0.1
                    },
                },
                {
                    upsert: true,
                    new: true,
                }
            )
            .exec()
        console.log(results)



        let warningcount = await warningcountSchema.findOne({
            UserID: person
        })

        let count = warningcount.warnings
        let modwarn = warningcount.modwarnings
        let positive = warningcount.positive

        console.log(count)
        console.log(modwarn)
        console.log(positive)

        let messages = await messageCountSchema.findOne({
            UserId: user
        })

        console.log(messages)


        let messagecount = messages.messageCount
        console.log(messagecount)



        let average = (messagecount / (count + modwarn) * positive)
        console.log(average)

        message.reply(`**warning stats for this user:**\nTotal score: **${average}**\nPositive flags: **${positive}**\nNegative flags (inc Silent): **${count}**\nWarnings by mods: **${modwarn}**`)

    }
}





