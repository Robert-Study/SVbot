module.exports = {
    commands: ['stare', 'warn'],
    minArgs: 1,
    maxArgs: 1,
    permissions: 'BAN_MEMBERS',

    callback: (message, arguments, text) => {
        message.delete()
        var person = message.guild.member(message.mentions.users.first());
        if (!person) return message.reply("I CANT FIND THE USER " + person);
        message.channel.send(`${"<@" + person.user.id + ">"}, a moderator is awkwardly staring at you.. 👀 
        **Please behave according to the rules!**`)
        const logchannel = message.guild.channels.cache.get('730029372697870347');


        const mongo = require('../../mongo')
        const warningcountSchema = require('../../schemas/1-warningcount')
        UserID = person

        return await mongo().then(async (mongoose) => {
            try {
                console.log('Searching the database for warnings')

                const results = await warningcountSchema
                    .findOneAndUpdate(
                        {
                            UserId: UserId,
                        },
                        {
                            $inc: {
                                warnings: 1,
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

                if (result.warnings >= 3) {
                    logchannel.send(`**${"<@" + person.user.id + ">"} has been warned by ${"<@" + message.author.id + ">"}**, this is already their ${result.warnings} warning! Please take action against this User.`)

                } else { logchannel.send(`**${"<@" + person.user.id + ">"} has been warned by ${"<@" + message.author.id + ">"}**, this is their ${result.warnings} warning.`) }

            } finally { mongoose.connection.close() }



        })
    }
}

