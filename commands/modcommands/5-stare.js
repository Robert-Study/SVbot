module.exports = {
    commands: ['stare', 'warn'],
    minArgs: 1,
    maxArgs: 1,
    permissions: 'BAN_MEMBERS',

    callback: async (message, arguments, text) => {
        const warningcountSchema = require('@schemas/16-userstats')
        const logchannel = message.guild.channels.cache.get('730029372697870347');

        message.delete()
        var person = message.guild.member(message.mentions.users.first());
        if (!person) return message.reply("I CANT FIND THE USER " + person);
        message.channel.send(`${"<@" + person.user.id + ">"}, a moderator is awkwardly staring at you.. 👀 
        **Please behave according to the rules!**`)

        UserID = person

        console.log('Searching the database for warnings')

        const results = await warningcountSchema
            .findOneAndUpdate(
                {
                    UserID: UserID,
                },
                {
                    $inc: {
                        warnings: 0,
                        positive: 0,
                        modwarnings: 1,
                    },
                },
                {
                    upsert: true,
                }
            )
            .exec()

        const result = await warningcountSchema.findOne({
            UserID
        })

        if (result.modwarnings >= 3) {
            logchannel.send(`**${"<@" + person.user.id + ">"} has been warned by ${"<@" + message.author.id + ">"}**, **this is already their #${result.modwarnings} warning! Please take action against this user.**`)

        } else { logchannel.send(`**${"<@" + person.user.id + ">"} has been warned by ${"<@" + message.author.id + ">"}**, this is their #${result.modwarnings} warning.`) }
    }
}

