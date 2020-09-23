module.exports = {
    commands: ['goodmorning', 'morning', 'dashboard'],
    minArgs: 0,
    expectedArgs: '<!morning or !dashboard>',

    callback: async (message, arguments, text) => {
        const weather = require('weather-js');
        const Discord = require('discord.js');
        const tododataSchema = require('@schemas/8-tododataschema')
        const userSchema = require('@schemas/3-deadlineschema')
        const todocountSchema = require('@schemas/7-todocountschema')
        const userdataSchema = require('@schemas/9-userinfoschema')
        const usertimeSchema = require('@schemas/1-logcountuser')
        const userdocumentSchema = require('@schemas/1-logcountuser')
        const { randomQuotes } = require('@JSON/randomQuotes.json');
        let getquote = randomQuotes[Math.floor(Math.random() * randomQuotes.length)]
        const mention = message.author
        const UserID = mention.id
        const UserId = mention.id
        const GuildID = "703937875720273972"

        try {
            //first we find the study time for this user in userdocument database
            console.log('Searching the database for userdata')
            const logperson = await userdocumentSchema.find({
                UserID
            })
            for (person of logperson) {
                //this is the study time logged in the personaltimeschema
                const personaltime = person.weekly
                console.log('Searching the database for timelogs')
                //search for the server total study time in usertimeschema
                const results = await usertimeSchema.find({
                    UserID: 'anon'
                })
                console.log(results)
                for (const time of results) {
                    const totaltime = time.weekly
                    //search for the total amount of users that logged time
                    const users = await userdocumentSchema.countDocuments({
                        GuildID: GuildID
                    })
                    //average study time based on users and total time, rounded to 1 after comma
                    let averagenotround = (totaltime / users)
                    let average = Math.round(averagenotround * 10) / 10

                    //set the first reply (treereply)
                    let treereply = (`🌴 **Study Time:**\n You studied **${personaltime} hours** this week\n The server-average is **${average} hours**\n*To view more detailed stats use* **!tree**`)
                    if (treereply) {
                        //continue by searching for the settings for this user in userdataschema 
                        const results = await userdataSchema.find({
                            UserId,
                        })
                        if (results) {
                            //set the embeds based on the different user settings
                            for (const result of results) {
                                const location = (result.place)
                                const quote = (result.setQuote)
                                const forecast = (result.setForecast)

                                if (quote === 'yes' && forecast === 'yes') {
                                    let quotereply = `**🔮A random quote:** \n ${getquote}`
                                    weather.find({ search: location, degreeType: 'C' }, async function (err, result) {
                                        try {
                                            let current = `⛅️ Condition: **${result[0].current.skytext}** \n🌡 Temperature: **${result[0].current.temperature} C** \n 💨 Windspeed: **${result[0].current.winddisplay}** \n\n `
                                            let forec = result[0].forecast
                                            let forecastreply = '**The forecast for your location:**\n'
                                            for (const forecast of forec) {
                                                forecastreply += `**${forecast.shortday}** it will be between *${forecast.low} - ${forecast.high} C∘* and **${forecast.skytextday}** with ${forecast.precip}% rain. \n`
                                            }

                                            let todocount = await todocountSchema.find({
                                                UserId,
                                            })
                                            for (const count of todocount) {
                                                const todocounts = (count.messageCount)
                                                if ((todocounts) > 0) {
                                                    let todoresults = await tododataSchema.find({
                                                        UserId,
                                                    })
                                                    let sortmyresults = todoresults
                                                    let todoreply = '**✅ Your remaining tasks:**\n'
                                                    for (const newresult of sortmyresults) {
                                                        todoreply += `**${newresult.todocount})** ${newresult.todo}\n`
                                                    }

                                                    let deadlines = await userSchema.find({
                                                        UserID,
                                                    })

                                                    if (deadlines) {
                                                        let deadlinereply = '**⏰ Your deadlines:**\n'
                                                        for (const deadline of deadlines) {
                                                            deadlinereply += `**${deadline.date}** deadline: **${deadline.dltext}**\n`
                                                        }
                                                        const exampleEmbed = new Discord.MessageEmbed()
                                                            .setColor('#337f4e')
                                                            .setTitle(`**Goodmorning** ${message.author.username}!`)
                                                            .addFields(
                                                                { name: 'Weather for today:', value: `${current}` },

                                                                { name: '\u200B', value: `${forecastreply}` },
                                                                { name: '\u200B', value: `${deadlinereply}` },
                                                                { name: '\u200B', value: `${todoreply}` },
                                                                { name: '\u200B', value: `${treereply}` },
                                                                { name: '\u200B', value: `${quotereply}` }
                                                            )
                                                            .setThumbnail(result[0].current.imageUrl)
                                                        message.channel.send(exampleEmbed)

                                                        message.delete()
                                                    }
                                                    else {
                                                        const todoembed = new Discord.MessageEmbed()
                                                            .setColor('#337f4e')
                                                            .setTitle(`**Goodmorning!** ${message.author.username}`)
                                                            .addFields(
                                                                { name: 'Weather for today:', value: `${current}` },
                                                                { name: '\u200B', value: `${forecastreply}` },
                                                                { name: '\u200B', value: `${todoreply}` },
                                                                { name: '\u200B', value: `${treereply}` },
                                                                { name: '\u200B', value: `${quotereply}` }

                                                            )
                                                            .setThumbnail(result[0].current.imageUrl)
                                                        message.channel.send(todoembed)
                                                        message.delete()
                                                    }
                                                }
                                                else {
                                                    let deadlines = await userSchema.find({
                                                        UserID,
                                                    })

                                                    if (deadlines) {
                                                        let deadlinereply = '**⏰ Your deadlines:**\n'
                                                        for (const deadline of deadlines) {
                                                            deadlinereply += `**${deadline.date}** deadline: **${deadline.dltext}**\n`
                                                        }
                                                        const deadlineEmbed = new Discord.MessageEmbed()
                                                            .setColor('#337f4e')
                                                            .setTitle(`**Goodmorning!** ${message.author.username}`)
                                                            .addFields(
                                                                { name: 'Weather for today:', value: `${current}` },
                                                                { name: '\u200B', value: `${forecastreply}` },
                                                                { name: '\u200B', value: `${deadlinereply}` },
                                                                { name: '\u200B', value: `${treereply}` },
                                                                { name: '\u200B', value: `${quotereply}` }
                                                            )
                                                            .setThumbnail(result[0].current.imageUrl)
                                                        message.channel.send(deadlineEmbed)
                                                        message.delete()
                                                    }
                                                    else {
                                                        let noinputEmbed = new Discord.MessageEmbed()
                                                            .setColor('#337f4e')
                                                            .setTitle(`**Goodmorning!** ${message.author.username}`)
                                                            .addFields(
                                                                { name: 'Weather for today:', value: `${current}` },
                                                                { name: '\u200B', value: `${forecastreply}` },
                                                                { name: '\u200B', value: `${treereply}` },
                                                                { name: '\u200B', value: `${quotereply}` }
                                                            )
                                                            .setThumbnail(result[0].current.imageUrl)
                                                        message.channel.send(noinputEmbed)
                                                        message.delete()
                                                    }
                                                }
                                            }

                                        } catch (err) {
                                            return message.channel.send("Unable To Get the data for the given location or user")
                                        }
                                    }
                                    )
                                } else if (quote === 'yes' && forecast === 'no') {
                                    let quotereply = `**🔮A random quote:** \n ${getquote}`
                                    weather.find({ search: location, degreeType: 'C' }, async function (err, result) {
                                        try {
                                            let current = `⛅️ Condition: **${result[0].current.skytext}** \n🌡 Temperature: **${result[0].current.temperature} C** \n 💨 Windspeed: **${result[0].current.winddisplay}** \n\n `
                                            let forec = result[0].forecast
                                            let forecastreply = '**The forecast for your location:**\n'
                                            for (const forecast of forec) {
                                                forecastreply += `**${forecast.shortday}** it will be between *${forecast.low} - ${forecast.high} C∘* and **${forecast.skytextday}** with ${forecast.precip}% rain. \n`
                                            }
                                            let todocount = await todocountSchema.find({
                                                UserId,
                                            })
                                            for (const count of todocount) {
                                                const todocounts = (count.messageCount)

                                                if ((todocounts) > 0) {
                                                    let todoresults = await tododataSchema.find({
                                                        UserId,
                                                    })
                                                    let sortmyresults = todoresults
                                                    let todoreply = '**✅ Your remaining tasks:**\n'
                                                    for (const newresult of sortmyresults) {
                                                        todoreply += `**${newresult.todocount})** ${newresult.todo}\n`
                                                    }

                                                    let deadlines = await userSchema.find({
                                                        UserID,
                                                    })

                                                    if (deadlines) {
                                                        let deadlinereply = '**⏰ Your deadlines:**\n'
                                                        for (const deadline of deadlines) {
                                                            deadlinereply += `**${deadline.date}** deadline: **${deadline.dltext}**\n`
                                                        }
                                                        const exampleEmbed = new Discord.MessageEmbed()
                                                            .setColor('#337f4e')
                                                            .setTitle(`**Goodmorning** ${message.author.username}!`)
                                                            .addFields(
                                                                { name: 'Weather for today:', value: `${current}` },
                                                                { name: '\u200B', value: `${deadlinereply}` },
                                                                { name: '\u200B', value: `${todoreply}` },
                                                                { name: '\u200B', value: `${treereply}` },
                                                                { name: '\u200B', value: `${quotereply}` }

                                                            )
                                                            .setThumbnail(result[0].current.imageUrl)
                                                        message.channel.send(exampleEmbed)
                                                        message.delete()
                                                    }
                                                    else {
                                                        const todoembed = new Discord.MessageEmbed()
                                                            .setColor('#337f4e')
                                                            .setTitle(`**Goodmorning!** ${message.author.username}`)
                                                            .addFields(
                                                                { name: 'Weather for today:', value: `${current}` },
                                                                { name: '\u200B', value: `${todoreply}` },
                                                                { name: '\u200B', value: `${treereply}` },
                                                                { name: '\u200B', value: `${quotereply}` }

                                                            )
                                                            .setThumbnail(result[0].current.imageUrl)
                                                        message.channel.send(todoembed)
                                                        message.delete()
                                                    }
                                                }
                                                else {
                                                    let deadlines = await userSchema.find({
                                                        UserID,
                                                    })

                                                    if (deadlines) {
                                                        let deadlinereply = '**⏰ Your deadlines:**\n'
                                                        for (const deadline of deadlines) {
                                                            deadlinereply += `**${deadline.date}** deadline: **${deadline.dltext}**\n`
                                                        }
                                                        const deadlineEmbed = new Discord.MessageEmbed()
                                                            .setColor('#337f4e')
                                                            .setTitle(`**Goodmorning!** ${message.author.username}`)
                                                            .addFields(
                                                                { name: 'Weather for today:', value: `${current}` },
                                                                { name: '\u200B', value: `${deadlinereply}` },
                                                                { name: '\u200B', value: `${treereply}` },
                                                                { name: '\u200B', value: `${quotereply}` }
                                                            )
                                                            .setThumbnail(result[0].current.imageUrl)
                                                        message.channel.send(deadlineEmbed)
                                                        message.delete()
                                                    }
                                                    else {
                                                        let noinputEmbed = new Discord.MessageEmbed()
                                                            .setColor('#337f4e')
                                                            .setTitle(`**Goodmorning!** ${message.author.username}`)
                                                            .addFields(
                                                                { name: 'Weather for today:', value: `${current}` },
                                                                { name: '\u200B', value: `${treereply}` },
                                                                { name: '\u200B', value: `${quotereply}` }
                                                            )
                                                            .setThumbnail(result[0].current.imageUrl)
                                                        message.channel.send(noinputEmbed)
                                                        message.delete()
                                                    }
                                                }
                                            }

                                        } catch (err) {
                                            return message.channel.send("Unable To Get the data for the given location or user")
                                        }
                                    }
                                    )

                                } else if (quote === 'no' && forecast === 'yes') {
                                    let quotereply = `**🔮A random quote:** \n ${getquote}`
                                    weather.find({ search: location, degreeType: 'C' }, async function (err, result) {
                                        try {
                                            let current = `⛅️ Condition: **${result[0].current.skytext}** \n🌡 Temperature: **${result[0].current.temperature} C** \n 💨 Windspeed: **${result[0].current.winddisplay}** \n\n `
                                            let forec = result[0].forecast
                                            let forecastreply = '**The forecast for your location:**\n'
                                            for (const forecast of forec) {
                                                forecastreply += `**${forecast.shortday}** it will be between *${forecast.low} - ${forecast.high} C∘* and **${forecast.skytextday}** with ${forecast.precip}% rain. \n`
                                            }
                                            let todocount = await todocountSchema.find({
                                                UserId,
                                            })
                                            for (const count of todocount) {
                                                const todocounts = (count.messageCount)

                                                if ((todocounts) > 0) {
                                                    let todoresults = await tododataSchema.find({
                                                        UserId,
                                                    })
                                                    let sortmyresults = todoresults
                                                    let todoreply = '**✅ Your remaining tasks:**\n'
                                                    for (const newresult of sortmyresults) {
                                                        todoreply += `**${newresult.todocount})** ${newresult.todo}\n`
                                                    }

                                                    let deadlines = await userSchema.find({
                                                        UserID,
                                                    })

                                                    if (deadlines) {
                                                        let deadlinereply = '**⏰ Your deadlines:**\n'
                                                        for (const deadline of deadlines) {
                                                            deadlinereply += `**${deadline.date}** deadline: **${deadline.dltext}**\n`
                                                        }
                                                        const exampleEmbed = new Discord.MessageEmbed()
                                                            .setColor('#337f4e')
                                                            .setTitle(`**Goodmorning** ${message.author.username}!`)
                                                            .addFields(
                                                                { name: 'Weather for today:', value: `${current}` },
                                                                { name: '\u200B', value: `${forecastreply}` },
                                                                { name: '\u200B', value: `${deadlinereply}` },
                                                                { name: '\u200B', value: `${todoreply}` },
                                                                { name: '\u200B', value: `${treereply}` },


                                                            )
                                                            .setThumbnail(result[0].current.imageUrl)
                                                        message.channel.send(exampleEmbed)
                                                        message.delete()
                                                    }
                                                    else {
                                                        const todoembed = new Discord.MessageEmbed()
                                                            .setColor('#337f4e')
                                                            .setTitle(`**Goodmorning!** ${message.author.username}`)
                                                            .addFields(
                                                                { name: 'Weather for today:', value: `${current}` },
                                                                { name: '\u200B', value: `${forecastreply}` },
                                                                { name: '\u200B', value: `${todoreply}` },
                                                                { name: '\u200B', value: `${treereply}` },


                                                            )
                                                            .setThumbnail(result[0].current.imageUrl)
                                                        message.channel.send(todoembed)
                                                        message.delete()
                                                    }
                                                }
                                                else {
                                                    let deadlines = await userSchema.find({
                                                        UserID,
                                                    })

                                                    if (deadlines) {
                                                        let deadlinereply = '**⏰ Your deadlines:**\n'
                                                        for (const deadline of deadlines) {
                                                            deadlinereply += `**${deadline.date}** deadline: **${deadline.dltext}**\n`
                                                        }
                                                        const deadlineEmbed = new Discord.MessageEmbed()
                                                            .setColor('#337f4e')
                                                            .setTitle(`**Goodmorning!** ${message.author.username}`)
                                                            .addFields(
                                                                { name: 'Weather for today:', value: `${current}` },
                                                                { name: '\u200B', value: `${forecastreply}` },
                                                                { name: '\u200B', value: `${deadlinereply}` },
                                                                { name: '\u200B', value: `${treereply}` },

                                                            )
                                                            .setThumbnail(result[0].current.imageUrl)
                                                        message.channel.send(deadlineEmbed)
                                                        message.delete()
                                                    }
                                                    else {
                                                        let noinputEmbed = new Discord.MessageEmbed()
                                                            .setColor('#337f4e')
                                                            .setTitle(`**Goodmorning!** ${message.author.username}`)
                                                            .addFields(
                                                                { name: 'Weather for today:', value: `${current}` },
                                                                { name: '\u200B', value: `${forecastreply}` },
                                                                { name: '\u200B', value: `${treereply}` },

                                                            )
                                                            .setThumbnail(result[0].current.imageUrl)
                                                        message.channel.send(noinputEmbed)
                                                        message.delete()
                                                    }
                                                }
                                            }

                                        } catch (err) {
                                            return message.channel.send("Unable To Get the data for the given location or user")
                                        }
                                    }
                                    )
                                } else if (quote === 'no' && forecast === 'no') {
                                    let quotereply = `**🔮A random quote:** \n ${getquote}`

                                    weather.find({ search: location, degreeType: 'C' }, async function (err, result) {
                                        try {
                                            let current = `⛅️ Condition: **${result[0].current.skytext}** \n🌡 Temperature: **${result[0].current.temperature} C** \n 💨 Windspeed: **${result[0].current.winddisplay}** \n\n `
              
                                            let forec = result[0].forecast
                                            let forecastreply = '**The forecast for your location:**\n'
                                            for (const forecast of forec) {
                                                forecastreply += `**${forecast.shortday}** it will be between *${forecast.low} - ${forecast.high} C∘* and **${forecast.skytextday}** with ${forecast.precip}% rain. \n`
                                            }
                                            let todocount = await todocountSchema.find({
                                                UserId,
                                            })
                                            for (const count of todocount) {
                                                const todocounts = (count.messageCount)

                                                if ((todocounts) > 0) {
                                                    let todoresults = await tododataSchema.find({
                                                        UserId,
                                                    })
                                                    let sortmyresults = todoresults
                                                    let todoreply = '**✅ Your remaining tasks:**\n'
                                                    for (const newresult of sortmyresults) {
                                                        todoreply += `**${newresult.todocount})** ${newresult.todo}\n`
                                                    }

                                                    let deadlines = await userSchema.find({
                                                        UserID,
                                                    })

                                                    if (deadlines) {
                                                        let deadlinereply = '**⏰ Your deadlines:**\n'
                                                        for (const deadline of deadlines) {
                                                            deadlinereply += `**${deadline.date}** deadline: **${deadline.dltext}**\n`
                                                        }
                                                        const exampleEmbed = new Discord.MessageEmbed()
                                                            .setColor('#337f4e')
                                                            .setTitle(`**Goodmorning** ${message.author.username}!`)
                                                            .addFields(
                                                                { name: 'Weather for today:', value: `${current}` },

                                                                { name: '\u200B', value: `${deadlinereply}` },
                                                                { name: '\u200B', value: `${todoreply}` },
                                                                { name: '\u200B', value: `${treereply}` },


                                                            )
                                                            .setThumbnail(result[0].current.imageUrl)
                                                        message.channel.send(exampleEmbed)
                                                        message.delete()
                                                    }
                                                    else {
                                                        const todoembed = new Discord.MessageEmbed()
                                                            .setColor('#337f4e')
                                                            .setTitle(`**Goodmorning!** ${message.author.username}`)
                                                            .addFields(
                                                                { name: 'Weather for today:', value: `${current}` },

                                                                { name: '\u200B', value: `${todoreply}` },
                                                                { name: '\u200B', value: `${treereply}` },


                                                            )
                                                            .setThumbnail(result[0].current.imageUrl)
                                                        message.channel.send(todoembed)
                                                        message.delete()
                                                    }
                                                }
                                                else {
                                                    let deadlines = await userSchema.find({
                                                        UserID,
                                                    })

                                                    if (deadlines) {
                                                        let deadlinereply = '**⏰ Your deadlines:**\n'
                                                        for (const deadline of deadlines) {
                                                            deadlinereply += `**${deadline.date}** deadline: **${deadline.dltext}**\n`
                                                        }
                                                        const deadlineEmbed = new Discord.MessageEmbed()
                                                            .setColor('#337f4e')
                                                            .setTitle(`**Goodmorning!** ${message.author.username}`)
                                                            .addFields(
                                                                { name: 'Weather for today:', value: `${current}` },

                                                                { name: '\u200B', value: `${deadlinereply}` },
                                                                { name: '\u200B', value: `${treereply}` },

                                                            )
                                                            .setThumbnail(result[0].current.imageUrl)
                                                        message.channel.send(deadlineEmbed)
                                                        message.delete()
                                                    }
                                                    else {
                                                        let noinputEmbed = new Discord.MessageEmbed()
                                                            .setColor('#337f4e')
                                                            .setTitle(`**Goodmorning!** ${message.author.username}`)
                                                            .addFields(
                                                                { name: 'Weather for today:', value: `${current}` },
                                                                { name: '\u200B', value: `${treereply}` },

                                                            )
                                                            .setThumbnail(result[0].current.imageUrl)
                                                        message.channel.send(noinputEmbed)
                                                        message.delete()
                                                    }
                                                }
                                            }

                                        } catch (err) {
                                            return message.channel.send("Unable To Get the data for the given location or user")
                                        }
                                    }
                                    )
                                }
                            }
                        } else { message.reply('Use the setup please!') }
                    }
                }
            }
        } finally { message.reply('have a good day!') }
    }
}







