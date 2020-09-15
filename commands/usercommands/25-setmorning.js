const Todocountschema = require('../../schemas/7-todocountschema')
const Treecountschema = require('../../schemas/2-logcountschema')

module.exports = {
    commands: ['morningsetup', 'setup', 'settings', 'set'],
    minArgs: 0,
    expectedArgs: '<!weather location>',

    callback: async (message, arguments, text) => {
        const Discord = require('discord.js')
        const collector = new Discord.MessageCollector(message.channel, m => m.author.id === message.author.id, { time: 60 * 10000 });

        message.reply('Starting the setup...')
        message.delete()

        const mention = message.author
        const UserId = mention.id
        message.reply("**Please write your location in one word**")
        collector.once('collect', async message => {
            let providedcity = message.content.toLowerCase()
            if (providedcity === 'stop') { message.reply("Submission ended!") }
            else {await message.channel.messages.fetch({ limit: 2 }).then(messages => {
                message.channel.bulkDelete(messages)}) 

                message.reply(`your location: **${providedcity}**`)
                message.reply('Do you want the forecast for this location? (answer with yes or no)')
                collector.once('collect', async message => {
                    let providedforecast = message.content.toLowerCase()

                    if (providedforecast === 'stop') { message.reply("Submission ended!") }
                    else if (providedforecast === 'yes' || providedforecast === 'no') {
                        await message.channel.messages.fetch({ limit: 2 }).then(messages => {
                            message.channel.bulkDelete(messages)}) 
                        message.reply(`Answer to forecast: **${providedforecast}**`)
                        message.reply('Do you want a random daily quote? (answer with yes or no)')
                        collector.once('collect', async message => {
                            let providedquote = message.content.toLowerCase()

                            if (providedquote === 'stop') { message.reply("Submission ended!") }
                            else if (providedquote === 'yes' || providedquote === 'no') {
                                await message.channel.messages.fetch({ limit: 5 }).then(messages => {
                                    message.channel.bulkDelete(messages)}) 


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
                                        place: providedcity,
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









                            } else { message.reply('No yes or no answer - setup ended') }
                        })
                    } else { message.reply('No yes or no answer - setup ended') }
                })
            }
        })
    }
}

