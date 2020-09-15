const Todocountschema = require('../../schemas/7-todocountschema')
const Treecountschema = require('../../schemas/2-logcountschema')

module.exports = {
    commands: ['beta'],
    minArgs: 0,
    expectedArgs: '<!weather location>',

    callback: async (message, arguments, text) => {
        message.reply('Starting the setup...')
        await message.channel.messages.fetch({ limit: 2 }).then(messages => {
            message.channel.bulkDelete(messages)
        })
        const mention = message.author
        const UserId = mention.id
        message.reply("**Please write your location in one word**")
        collector.once('collect', async message => {
            let providedcity = message.content
            if (providedheader === 'stop') { message.reply("Submission ended!") }
            else {
                await message.channel.messages.fetch({ limit: 2 }).then(messages => {
                    message.channel.bulkDelete(messages)
                })
                message.reply(`your location: **${providedcity}**`)
                message.reply('Do you want the forecast for this location? (answer with yes or no)')
                collector.once('collect', async message => {
                    let providedforecast = message.content
                    await message.channel.messages.fetch({ limit: 2 }).then(messages => {
                        message.channel.bulkDelete(messages)
                    })
                    if (providedforecast === 'stop') { message.reply("Submission ended!") }
                    else if (providedforecast != yes || providedforecast != no) { message.reply("You did not answer with yes or no - setup ended.") }
                    else {
                        message.reply(`Answer to forecast: **${providedforecast}**`)
                        message.reply('Do you want a random daily quote? (answer with yes or no)')
                        collector.once('collect', async message => {
                            let providedquote = message.content
                            await message.channel.messages.fetch({ limit: 2 }).then(messages => {
                                message.channel.bulkDelete(messages)
                            })
                            if (providedquote === 'stop') { message.reply("Submission ended!") }
                            else if (providedquote != yes || providedquote != no) { message.reply("You did not answer with yes or no - setup ended.") }
                            else {
                                await message.channel.messages.fetch({ limit: 4 }).then(messages => {
                                    message.channel.bulkDelete(messages)
                                })
                                message.reply(`Setup completed, use !morning or !dashboard to view your personalized dashboard`)

                                const userdataSchema = require('../../schemas/9-userinfoschema')
                                const mention = message.author
                                const UserId = mention.id
                                const UserID = mention.id

                                let timeLog = 0
                                let messageCount = 0

                                console.log(providedforecast)
                                console.log(providedquote)



                                const result = await userdataSchema.findOneAndUpdate(
                                    {
                                        UserId,
                                    },
                                    {
                                        place: providedplace,
                                        setQuote: providedquote,
                                        setForecast: providedforecast
                                    },

                                    {
                                        upsert: true,
                                        new: true,
                                    }
                                )
                                const locount = await Treecountschema.findOneAndUpdate(
                                    {
                                        UserID,
                                    },
                                    {
                                        UserID,
                                        barcode: 101,
                                        $inc: {
                                            timeLog,
                                        },
                                    },
                                    {
                                        upsert: true,
                                        new: true,
                                    }
                                )


                                const updatetodo = await Todocountschema.findOneAndUpdate(
                                    {
                                        UserId,
                                    },
                                    {
                                        UserId,
                                        $inc: {
                                            messageCount,
                                        },
                                    },

                                    {
                                        upsert: true,
                                        new: true,
                                    }
                                )









                            }
                        }) 
                    }        
                })
            }
        })
    }
}

