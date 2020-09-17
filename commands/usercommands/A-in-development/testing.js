module.exports = {
    commands: ['beta'],
    minArgs: 0,
    maxArgs: 0,


    callback: async (message, arguments, text) => {
        const treecountschema = require('@schemas/4-anoncountschema')
        let result = await treecountschema.findOne({
            UserId: 'tree'
        })
        const Discord = require('discord.js')
        const eventschema = require('@schemas/11-eventsetupschema')

        const collector = new Discord.MessageCollector(message.channel, m => m.author.id === message.author.id, { time: 60 * 10000 });
        message.channel.send("Write where your submission should go, write **'app', 'tip' or 'event'** - Complete your submission in 10min, to stop reply to the bot with 'stop'")
        collector.once('collect', async message => {
            let whatsub = message.content
            console.log(whatsub)

            if (whatsub === 'app') {
                message.channel.send("Write your **app**-suggestion (max 1200 characters)")
                collector.once('collect', async message => {

                    let apptext = message.content
                    message.delete()
                    if (apptext === 'stop') { message.reply("Submission ended!") }
                    else {
                        message.reply("Thanks, your App-Tip has been added in the #app-channel!")
                        let appchannel = message.guild.channels.cache.get('708032923428716626');
                        let AppEmbed = new Discord.MessageEmbed()
                            .setColor('#337f4e')
                            .setTitle(`${message.author.username} recommends this App:`)
                            .setTimestamp()
                            .setFooter(`Recommended by: ${message.author.username} `)
                            .addFields(
                                { name: 'App recommendation:', value: `${apptext}` })

                        let reactapp = await appchannel.send(AppEmbed);
                        reactapp.react('👍')
                        reactapp.react('👎')
                    }
                })
            }

            else if (whatsub === 'tip') {
                message.channel.send("Write your **tip**-suggestion (max 1200 characters)")
                collector.once('collect', async message => {
                    message.delete()
                    let tiptext = message.content
                    if (tiptext === 'stop') { message.reply("Submission ended!") }
                    else {
                        message.reply("Thanks, your Study Tip has been added in the #studytip channel!")
                        const Discord = require('discord.js');
                        let tipchannel = message.guild.channels.cache.get('708651085765804093');
                        let tipEmbed = new Discord.MessageEmbed()
                            .setColor('#337f4e')
                            .setTitle(`${message.author.username} has a study tip:`)
                            .setTimestamp()
                            .setFooter(`Recommended by: ${message.author.username} `)
                            .addFields(
                                { name: 'Study tip:', value: `${tiptext}` })

                        let reacttip = await tipchannel.send(tipEmbed);
                        reacttip.react('👍')
                        reacttip.react('👎')
                    }
                })
            }
            
            else if (whatsub === 'event') {
                let count = result.messageCount
                switch (count) {
                    case 1: {
                        let emoji = '🟥'
                        let newcount = 2
                        const resultnew = await treecountschema.findOneAndUpdate(
                            {
                                UserId: 'tree'
                            },
                            {
                                messageCount: newcount,
                            },

                            {
                                upsert: true,
                                new: true,
                            }
                        )
                        await message.channel.messages.fetch({ limit: 3 }).then(messages => {
                            message.channel.bulkDelete(messages)
                        })

                        const mention = message.author
                        const UserId = mention.id
                        message.reply("**Please write your events title.**")
                        collector.once('collect', async message => {
                            let providedheader = message.content
                            if (providedheader === 'stop') { message.reply("Submission ended!") }
                            else {
                                await message.channel.messages.fetch({ limit: 2 }).then(messages => {
                                    message.channel.bulkDelete(messages)
                                })
                                message.channel.send(`The set title: **${providedheader}**`)
                                console.log(providedheader)
                                message.reply("**Please write the date of the event in DD/MM/YYYY format.**")
                                collector.once('collect', async message => {
                                    let provideddate = message.content
                                    if (provideddate === 'stop') { message.reply("Submission ended!") }
                                    else {
                                        await message.channel.messages.fetch({ limit: 2 }).then(messages => {
                                            message.channel.bulkDelete(messages)
                                        })
                                        message.channel.send(`The set date: **${provideddate}**`)
                                        console.log(provideddate)
                                        message.reply("**Please write the time of the event.**")
                                        collector.once('collect', async message => {
                                            let providedtime = message.content
                                            if (providedtime === 'stop') { message.reply("Submission ended!") }
                                            else {
                                                await message.channel.messages.fetch({ limit: 2 }).then(messages => {
                                                    message.channel.bulkDelete(messages)
                                                })
                                                message.channel.send(`The set time: ${providedtime}`)
                                                console.log(providedtime)
                                                message.reply("**Please write a description of the event (1200characters max!)**")
                                                collector.once('collect', async message => {
                                                    let provideddescription = message.content
                                                    if (provideddescription === 'stop') { message.reply("Submission ended!") }
                                                    else {
                                                        await message.channel.messages.fetch({ limit: 5 }).then(messages => {
                                                            message.channel.bulkDelete(messages)
                                                        })
                                                        const Discord = require('discord.js');
                                                        let eventchannel = message.guild.channels.cache.get('754042973850828821');
                                                        let eventEmbed = new Discord.MessageEmbed()
                                                            .setColor('#28a1c9')
                                                            .setTitle(`${providedheader}`)
                                                            .setTimestamp()
                                                            .setFooter(`Event host: ${message.author.username} `)
                                                            .addFields(
                                                                { name: "New event", value: `**${message.author.username}** has planned an event, the event is open to attend for any verified member. A specific channel with the event title will be set up on the event date and time. Please, when attending, make sure you are on the specified time in the channel and **respect your host.** A reminder is set on the date 2 hours prior to the event, to receive a all updates from your host **react with the RED-color** set for this event!`},
                                                                { name: "Date:", value: `${provideddate}`, inline: true },
                                                                { name: "Time:", value: `${providedtime}`, inline: true },
                                                                { name: "Event description:", value: `${provideddescription}` },
                                                            )
                                                        let reactevent = await eventchannel.send(eventEmbed);
                                                        reactevent.react(emoji)
                                                        console.log(provideddescription)

                                                        message.reply(`Your event ${providedheader} is set on the ${provideddate} at ${providedtime}`)
                                                        message.author.send(`Hi!\nSupergreat that you are hosting an event! I have automatically saved your event in my database. This means that you can do **!event** in any channel and send the event-embed to any channel you want.\n\nI have also made your event the **@eventred** so you can use this tag to inform the interested users of the start of the event and any additional info you want them to know.\n\nThe **@eventred** tag is reserved for your event until one day after your given date!\n\n Hope you will have a great event and we wish you all the best!!\n\n**The Study Vibes Team**`)
                                                        const result = await eventschema.findOneAndUpdate(
                                                            {
                                                                UserId,
                                                            },
                                                            {
                                                                date: provideddate,
                                                                time: providedtime,
                                                                header: providedheader,
                                                                description: provideddescription,
                                                                guildID: '703937875720273972',
                                                                colorcount: count,
                                                                barcode: 901
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
                        })
                    } break;
                    case 2: {
                        let emoji = '🟧'
                        let newcount = 3
                        const resultnew = await treecountschema.findOneAndUpdate(
                            {
                                UserId: 'tree'
                            },
                            {
                                messageCount: newcount,
                            },

                            {
                                upsert: true,
                                new: true,
                            }
                        )
                        await message.channel.messages.fetch({ limit: 3 }).then(messages => {
                            message.channel.bulkDelete(messages)
                        })

                        const mention = message.author
                        const UserId = mention.id
                        message.reply("**Please write your events title.**")
                        collector.once('collect', async message => {
                            let providedheader = message.content
                            if (providedheader === 'stop') { message.reply("Submission ended!") }
                            else {
                                await message.channel.messages.fetch({ limit: 2 }).then(messages => {
                                    message.channel.bulkDelete(messages)
                                })
                                message.channel.send(`The set title: **${providedheader}**`)
                                console.log(providedheader)
                                message.reply("**Please write the date of the event in DD/MM/YYYY format.**")
                                collector.once('collect', async message => {
                                    let provideddate = message.content
                                    if (provideddate === 'stop') { message.reply("Submission ended!") }
                                    else {
                                        await message.channel.messages.fetch({ limit: 2 }).then(messages => {
                                            message.channel.bulkDelete(messages)
                                        })
                                        message.channel.send(`The set date: **${provideddate}**`)
                                        console.log(provideddate)
                                        message.reply("**Please write the time of the event.**")
                                        collector.once('collect', async message => {
                                            let providedtime = message.content
                                            if (providedtime === 'stop') { message.reply("Submission ended!") }
                                            else {
                                                await message.channel.messages.fetch({ limit: 2 }).then(messages => {
                                                    message.channel.bulkDelete(messages)
                                                })
                                                message.channel.send(`The set time: ${providedtime}`)
                                                console.log(providedtime)
                                                message.reply("**Please write a description of the event (1200characters max!)**")
                                                collector.once('collect', async message => {
                                                    let provideddescription = message.content
                                                    if (provideddescription === 'stop') { message.reply("Submission ended!") }
                                                    else {
                                                        await message.channel.messages.fetch({ limit: 5 }).then(messages => {
                                                            message.channel.bulkDelete(messages)
                                                        })
                                                        const Discord = require('discord.js');
                                                        let eventchannel = message.guild.channels.cache.get('754042973850828821');
                                                        let eventEmbed = new Discord.MessageEmbed()
                                                            .setColor('#28a1c9')
                                                            .setTitle(`${providedheader}`)
                                                            .setTimestamp()
                                                            .setFooter(`Event host: ${message.author.username} `)
                                                            .addFields(
                                                                { name: "New event", value: `**${message.author.username}** has planned an event, the event is open to attend for any verified member. A specific channel with the event title will be set up on the event date and time. Please, when attending, make sure you are on the specified time in the channel and **respect your host.** A reminder is set on the date 2 hours prior to the event, to receive a all updates from your host **react with the ORANGE-color** set for this event!`},
                                                                { name: "Date:", value: `${provideddate}`, inline: true },
                                                                { name: "Time:", value: `${providedtime}`, inline: true },
                                                                { name: "Event description:", value: `${provideddescription}` },
                                                            )
                                                        let reactevent = await eventchannel.send(eventEmbed);
                                                        reactevent.react(emoji)
                                                        console.log(provideddescription)

                                                        message.reply(`Your event ${providedheader} is set on the ${provideddate} at ${providedtime}`)
                                                        message.author.send(`Hi!\nSupergreat that you are hosting an event! I have automatically saved your event in my database. This means that you can do **!event** in any channel and send the event-embed to any channel you want.\n\nI have also made your event the **@eventorange** so you can use this tag to inform the interested users of the start of the event and any additional info you want them to know.\n\nThe **@eventorange** tag is reserved for your event until one day after your given date!\n\n Hope you will have a great event and we wish you all the best!!\n\n**The Study Vibes Team**`)
                                                        const result = await eventschema.findOneAndUpdate(
                                                            {
                                                                UserId,
                                                            },
                                                            {
                                                                date: provideddate,
                                                                time: providedtime,
                                                                header: providedheader,
                                                                description: provideddescription,
                                                                guildID: '703937875720273972',
                                                                colorcount: count,
                                                                barcode: 901
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
                        })
                    } break;
                    case 3: {
                        let emoji = '🟦'
                        let newcount = 1
                        const resultnew = await treecountschema.findOneAndUpdate(
                            {
                                UserId: 'tree'
                            },
                            {
                                messageCount: newcount,
                            },

                            {
                                upsert: true,
                                new: true,
                            }
                        )
                        const mention = message.author
                        const UserId = mention.id
                        message.reply("**Please write your events title.**")
                        collector.once('collect', async message => {
                            let providedheader = message.content
                            if (providedheader === 'stop') { message.reply("Submission ended!") }
                            else {
                                await message.channel.messages.fetch({ limit: 2 }).then(messages => {
                                    message.channel.bulkDelete(messages)
                                })
                                message.channel.send(`The set title: **${providedheader}**`)
                                console.log(providedheader)
                                message.reply("**Please write the date of the event in DD/MM/YYYY format.**")
                                collector.once('collect', async message => {
                                    let provideddate = message.content
                                    if (provideddate === 'stop') { message.reply("Submission ended!") }
                                    else {
                                        await message.channel.messages.fetch({ limit: 2 }).then(messages => {
                                            message.channel.bulkDelete(messages)
                                        })
                                        message.channel.send(`The set date: **${provideddate}**`)
                                        console.log(provideddate)
                                        message.reply("**Please write the time of the event.**")
                                        collector.once('collect', async message => {
                                            let providedtime = message.content
                                            if (providedtime === 'stop') { message.reply("Submission ended!") }
                                            else {
                                                await message.channel.messages.fetch({ limit: 2 }).then(messages => {
                                                    message.channel.bulkDelete(messages)
                                                })
                                                message.channel.send(`The set time: ${providedtime}`)
                                                console.log(providedtime)
                                                message.reply("**Please write a description of the event (1200characters max!)**")
                                                collector.once('collect', async message => {
                                                    let provideddescription = message.content
                                                    if (provideddescription === 'stop') { message.reply("Submission ended!") }
                                                    else {
                                                        await message.channel.messages.fetch({ limit: 5 }).then(messages => {
                                                            message.channel.bulkDelete(messages)
                                                        })
                                                        const Discord = require('discord.js');
                                                        let eventchannel = message.guild.channels.cache.get('754042973850828821');
                                                        let eventEmbed = new Discord.MessageEmbed()
                                                            .setColor('#28a1c9')
                                                            .setTitle(`${providedheader}`)
                                                            .setTimestamp()
                                                            .setFooter(`Event host: ${message.author.username} `)
                                                            .addFields(
                                                                { name: "New event", value: `**${message.author.username}** has planned an event, the event is open to attend for any verified member. A specific channel with the event title will be set up on the event date and time. Please, when attending, make sure you are on the specified time in the channel and **respect your host.** A reminder is set on the date 2 hours prior to the event, to receive a all updates from your host **react with the BLUE-color** set for this event!` },
                                                                { name: "Date:", value: `${provideddate}`, inline: true },
                                                                { name: "Time:", value: `${providedtime}`, inline: true },
                                                                { name: "Event description:", value: `${provideddescription}` },
                                                            )
                                                        let reactevent = await eventchannel.send(eventEmbed);
                                                        reactevent.react(emoji)
                                                        console.log(provideddescription)

                                                        message.reply(`Your event ${providedheader} is set on the ${provideddate} at ${providedtime}`)
                                                        message.author.send(`Hi!\nSupergreat that you are hosting an event! I have automatically saved your event in my database. This means that you can do **!event** in any channel and send the event-embed to any channel you want.\n\nI have also made your event the **@eventblue** so you can use this tag to inform the interested users of the start of the event and any additional info you want them to know.\n\nThe **@eventblue** tag is reserved for your event until one day after your given date!\n\n Hope you will have a great event and we wish you all the best!!\n\n**The Study Vibes Team**`)

                                                        const result = await eventschema.findOneAndUpdate(
                                                            {
                                                                UserId,
                                                            },
                                                            {
                                                                date: provideddate,
                                                                time: providedtime,
                                                                header: providedheader,
                                                                description: provideddescription,
                                                                guildID: '703937875720273972',
                                                                colorcount: count,
                                                                barcode: 901
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
                        })
                    } break;
                }
            }

        })
    }
}