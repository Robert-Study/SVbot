module.exports = {
    commands: ['stat', 'warnstats'],
    minArgs: 1,
    maxArgs: 1,
    permissions: 'BAN_MEMBERS',

    callback: async (message, arguments, text) => {
        var person = message.guild.member(message.mentions.users.first());
        if (!person) return message.reply("I CANT FIND THE USER " + person);
        let user = person.id
        let mentions = arguments[0]

        const warningcountSchema = require('@schemas/16-userstats')
        const messageCountSchema = require('@schemas/12-messagecount')

        const results = await warningcountSchema
            .findOneAndUpdate(
                {
                    UserID: person,
                },
                {
                    $inc: {
                        positive: 0.001,
                        modwarnings: 0.001,
                        warnings: 0.001
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
        let countround = Math.round(count * 1) / 1
        let modwarn = warningcount.modwarnings
        let modround = Math.round(modwarn * 1) / 1
        let positive = warningcount.positive
        let positiveround = Math.round(positive * 1) / 1

        console.log(countround)
        console.log(modround)
        console.log(positiveround)

        let messages = await messageCountSchema.findOne({
            UserId: user
        })

        console.log(messages)


        let messagecount = messages.messageCount
        console.log(messagecount)



        let average = (messagecount / (count + modwarn) * positive)
        console.log(average)

        let averageround = Math.round(average * 1) / 1

        console.log(averageround)

        message.channel.send(`**__Warning stats for ${mentions}__**\nTotal score: **${averageround}**\n✅ Positive flags: **${positiveround}**\n🚩 Negative flags (*inc. silent*): **${countround}**\n🏴‍☠️ Warnings by mods: **${modround}**`)

    }
}





