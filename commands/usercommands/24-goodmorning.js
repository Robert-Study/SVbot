module.exports = {
    commands: ['goodmorning', 'morning'],
    minArgs: 0,
    expectedArgs: '<!weather location>',

    callback: async (message, arguments, text) => {
        const weather = require('weather-js');
        const discord = require('discord.js');
        const mongo = require('../../mongo')
        const tododataSchema = require('../../schemas/8-tododataschema')
        const userSchema = require('../../schemas/3-deadlineschema')
        const todocountSchema = require('../../schemas/7-todocountschema')
        const userdataSchema = require('../../schemas/9-userinfoschema')
        const { randomQuotes } = require('../../randomQuotes.json');
        let getquote = randomQuotes[Math.floor(Math.random() * randomQuotes.length)]
        const mention = message.author
        const UserID = mention.id
        const UserId = mention.id


        await mongo().then(async (mongoose) => {
            try {
                console.log('Searching the database for Suggestions')

                const results = await userdataSchema.find({
                    UserId,
                })
                if (results) {
                    console.log(results)
                    for (const result of results) {
                        const location = (result.place)
                        const quote = (result.setQuote)
                        const forecast = (result.setForecast)
                        console.log(`${location}, ${quote}, ${forecast}`)
                        if (quote === 'yes' && forecast === 'yes') {
                            let quotereply = getquote
                            console.log(getquote)
                            weather.find({ search: location, degreeType: 'C' }, function (err, result) {
                                try {
                                    let current = `⛅️ Condition: **${result[0].current.skytext}** \n🌡 Temperature: **${result[0].current.temperature} C** \n 💨 Windspeed: **${result[0].current.winddisplay}** \n\n `
                                    console.log(current)
                                    let forec = result[0].forecast
                                    let forecastreply = 'Forecast:'
                                    for (const forecast of forec) {
                                        forecastreply += `**${forecast.shortday}** it will be between *${forecast.low} - ${forecast.high} C∘* and **${forecast.skytextday}** with ${forecast.precip}% rain. \n\n`
                                    }
                                    mongo().then(async (mongoose) => {
                                        let todocount = await todocountSchema.find({
                                            UserId,
                                        })
                                        if (todocount > 0) {
                                            let todoresults = await tododataSchema.find({
                                                UserId,
                                            })
                                            let sortmyresults = todoresults
                                            let todoreply = '**Your To-do List:** \n\n'
                                            for (const newresult of sortmyresults) {
                                                todoreply += `**${newresult.todocount})** *${newresult.todo}*\n`
                                            }

                                            let deadlines = await userSchema.find({
                                                UserID,
                                            })

                                            if (deadlines) {
                                                let deadlinereply = 'Here you go: \n\n'
                                                for (const deadline of deadlines) {
                                                    deadlinereply += `**${deadline.date}** deadline: *${deadline.dltext}*\n\n`
                                                }
                                                const exampleEmbed = new Discord.MessageEmbed()
                                                    .setColor('#337f4e')
                                                    .setTitle(`**Goodmorning!** ${message.author.username}`)
                                                    .addFields(
                                                        { name: 'Weather for today:', value: `${current}` },
                                                        { name: 'The forecast for your location:', value: `${forecastreply}` },
                                                        { name: 'Your deadlines:', value: `${deadlinereply}` },

                                                        { name: 'Your remaining tasks:', value: `${todoreply}` },
                                                        { name: 'Random quote:', value: `${quotereply}` }
                                                    )
                                                message.channel.send(exampleEmbed)
                                                mongoose.connection.close()
                                            }
                                            else {
                                                const todoembed = new Discord.MessageEmbed()
                                                    .setColor('#337f4e')
                                                    .setTitle(`**Goodmorning!** ${message.author.username}`)
                                                    .addFields(
                                                        { name: 'Weather for today:', value: `${current}` },
                                                        { name: 'The forecast for your location:', value: `${forecastreply}` },
                                                        { name: 'Your remaining tasks:', value: `${todoreply}` },
                                                        { name: 'Random quote:', value: `${quotereply}` }
                                                    )
                                                message.channel.send(todoembed)
                                                mongoose.connection.close()
                                            }
                                        }
                                        else {
                                            let deadlines = await userSchema.find({
                                                UserID,
                                            })

                                            if (deadlines) {
                                                let deadlinereply = 'Here you go: \n\n'
                                                for (const deadline of deadlines) {
                                                    deadlinereply += `**${deadline.date}** deadline: *${deadline.dltext}*\n\n`
                                                }
                                                const deadlineEmbed = new Discord.MessageEmbed()
                                                    .setColor('#337f4e')
                                                    .setTitle(`**Goodmorning!** ${message.author.username}`)
                                                    .addFields(
                                                        { name: 'Weather for today:', value: `${current}` },
                                                        { name: 'The forecast for your location:', value: `${forecastreply}` },
                                                        { name: 'Your deadlines:', value: `${deadlinereply}` },
                                                        { name: 'Random quote:', value: `${quotereply}` }
                                                    )
                                                message.channel.send(deadlineEmbed)
                                                mongoose.connection.close()
                                            }
                                            else {
                                                let noinputEmbed = new Discord.MessageEmbed()
                                                    .setColor('#337f4e')
                                                    .setTitle(`**Goodmorning!** ${message.author.username}`)
                                                    .addFields(
                                                        { name: 'Weather for today:', value: `${current}` },
                                                        { name: 'The forecast for your location:', value: `${forecastreply}` },
                                                        { name: 'Random quote:', value: `${quotereply}` }
                                                    )
                                                message.channel.send(noinputEmbed)
                                                mongoose.connection.close()
                                            }

                                        }
                                    })
                                } catch (err) {
                                    return message.channel.send("Unable To Get the data of Given location")
                                }
                            }
                            )
                        } else if (quote === 'yes' && forecast === 'no') {
                            let quotereply = getquote
                            weather.find({ search: location.join(" "), degreeType: 'C' }, function (err, result) {
                                try {
                                    let current = `⛅️ Condition: **${result[0].current.skytext}** \n🌡 Temperature: **${result[0].current.temperature} C** \n 💨 Windspeed: **${result[0].current.winddisplay}** \n\n `
                                    let forec = result[0].forecast
                                    let forecastreply = 'Forecast:'
                                    for (const forecast of forec) {
                                        forecastreply += `**${forecast.shortday}** it will be between *${forecast.low} - ${forecast.high} C∘* and **${forecast.skytextday}** with ${forecast.precip}% rain. \n\n`
                                    } mongo().then(async (mongoose) => {
                                        let todocount = await todocountSchema.find({
                                            UserId,
                                        })
                                        if (todocount > 0) {
                                            let todoresults = await tododataSchema.find({
                                                UserId,
                                            })
                                            let sortmyresults = todoresults
                                            let todoreply = '**Your To-do List:** \n\n'
                                            for (const newresult of sortmyresults) {
                                                todoreply += `**${newresult.todocount})** *${newresult.todo}*\n`
                                            }

                                            let deadlines = await userSchema.find({
                                                UserID,
                                            })

                                            if (deadlines) {
                                                let deadlinereply = 'Here you go: \n\n'
                                                for (const deadline of deadlines) {
                                                    deadlinereply += `**${deadline.date}** deadline: *${deadline.dltext}*\n\n`
                                                }
                                                const exampleEmbed = new Discord.MessageEmbed()
                                                    .setColor('#337f4e')
                                                    .setTitle(`**Goodmorning!** ${message.author.username}`)
                                                    .addFields(
                                                        { name: 'Weather for today:', value: `${current}` },

                                                        { name: 'Your deadlines:', value: `${deadlinereply}` },

                                                        { name: 'Your remaining tasks:', value: `${todoreply}` },
                                                        { name: 'Random quote:', value: `${quotereply}` }
                                                    )
                                                message.channel.send(exampleEmbed)
                                                mongoose.connection.close()
                                            }
                                            else {
                                                const todoembed = new Discord.MessageEmbed()
                                                    .setColor('#337f4e')
                                                    .setTitle(`**Goodmorning!** ${message.author.username}`)
                                                    .addFields(
                                                        { name: 'Weather for today:', value: `${current}` },

                                                        { name: 'Your remaining tasks:', value: `${todoreply}` },
                                                        { name: 'Random quote:', value: `${quotereply}` }
                                                    )
                                                message.channel.send(todoembed)
                                                mongoose.connection.close()
                                            }
                                        }
                                        else {
                                            let deadlines = await userSchema.find({
                                                UserID,
                                            })

                                            if (deadlines) {
                                                let deadlinereply = 'Here you go: \n\n'
                                                for (const deadline of deadlines) {
                                                    deadlinereply += `**${deadline.date}** deadline: *${deadline.dltext}*\n\n`
                                                }
                                                const deadlineEmbed = new Discord.MessageEmbed()
                                                    .setColor('#337f4e')
                                                    .setTitle(`**Goodmorning!** ${message.author.username}`)
                                                    .addFields(
                                                        { name: 'Weather for today:', value: `${current}` },

                                                        { name: 'Your deadlines:', value: `${deadlinereply}` },
                                                        { name: 'Random quote:', value: `${quotereply}` }
                                                    )
                                                message.channel.send(deadlineEmbed)
                                                mongoose.connection.close()
                                            }
                                            else {
                                                const noinputEmbed = new Discord.MessageEmbed()
                                                    .setColor('#337f4e')
                                                    .setTitle(`**Goodmorning!** ${message.author.username}`)
                                                    .addFields(
                                                        { name: 'Weather for today:', value: `${current}` },

                                                        { name: 'Random quote:', value: `${quotereply}` }
                                                    )
                                                message.channel.send(noinputEmbed)
                                                mongoose.connection.close()
                                            }



                                        }

                                    })

                                }
                                catch (err) {
                                    return message.channel.send("Unable To Get the data of Given location")
                                }
                            }
                            )

                        } else if (quote === 'no' && forecast === 'yes') {
                            weather.find({ search: location.join(" "), degreeType: 'C' }, function (err, result) {
                                try {
                                    let current = `⛅️ Condition: **${result[0].current.skytext}** \n🌡 Temperature: **${result[0].current.temperature} C** \n 💨 Windspeed: **${result[0].current.winddisplay}** \n\n `
                                    let forec = result[0].forecast
                                    let forecastreply = 'Forecast:'
                                    for (const forecast of forec) {
                                        forecastreply += `**${forecast.shortday}** it will be between *${forecast.low} - ${forecast.high} C∘* and **${forecast.skytextday}** with ${forecast.precip}% rain. \n\n`
                                    } mongo().then(async (mongoose) => {
                                        let todocount = await todocountSchema.find({
                                            UserId,
                                        })
                                        if (todocount > 0) {
                                            let todoresults = await tododataSchema.find({
                                                UserId,
                                            })
                                            let sortmyresults = todoresults
                                            let todoreply = '**Your To-do List:** \n\n'
                                            for (const newresult of sortmyresults) {
                                                todoreply += `**${newresult.todocount})** *${newresult.todo}*\n`
                                            }

                                            let deadlines = await userSchema.find({
                                                UserID,
                                            })

                                            if (deadlines) {
                                                let deadlinereply = 'Here you go: \n\n'
                                                for (const deadline of deadlines) {
                                                    deadlinereply += `**${deadline.date}** deadline: *${deadline.dltext}*\n\n`
                                                }
                                                const exampleEmbed = new Discord.MessageEmbed()
                                                    .setColor('#337f4e')
                                                    .setTitle(`**Goodmorning!** ${message.author.username}`)
                                                    .addFields(
                                                        { name: 'Weather for today:', value: `${current}` },
                                                        { name: 'The forecast for your location:', value: `${forecastreply}` },
                                                        { name: 'Your deadlines:', value: `${deadlinereply}` },

                                                        { name: 'Your remaining tasks:', value: `${todoreply}` },
                                                    )
                                                message.channel.send(exampleEmbed)
                                                mongoose.connection.close()
                                            }
                                            else {
                                                const todoembed = new Discord.MessageEmbed()
                                                    .setColor('#337f4e')
                                                    .setTitle(`**Goodmorning!** ${message.author.username}`)
                                                    .addFields(
                                                        { name: 'Weather for today:', value: `${current}` },
                                                        { name: 'The forecast for your location:', value: `${forecastreply}` },
                                                        { name: 'Your remaining tasks:', value: `${todoreply}` },
                                                    )
                                                message.channel.send(todoembed)
                                                mongoose.connection.close()
                                            }
                                        }
                                        else {
                                            let deadlines = await userSchema.find({
                                                UserID,
                                            })

                                            if (deadlines) {
                                                let deadlinereply = 'Here you go: \n\n'
                                                for (const deadline of deadlines) {
                                                    deadlinereply += `**${deadline.date}** deadline: *${deadline.dltext}*\n\n`
                                                }
                                                const deadlineEmbed = new Discord.MessageEmbed()
                                                    .setColor('#337f4e')
                                                    .setTitle(`**Goodmorning!** ${message.author.username}`)
                                                    .addFields(
                                                        { name: 'Weather for today:', value: `${current}` },
                                                        { name: 'The forecast for your location:', value: `${forecastreply}` },
                                                        { name: 'Your deadlines:', value: `${deadlinereply}` },
                                                    )
                                                message.channel.send(deadlineEmbed)
                                                mongoose.connection.close()
                                            }
                                            else {
                                                const noinputEmbed = new Discord.MessageEmbed()
                                                    .setColor('#337f4e')
                                                    .setTitle(`**Goodmorning!** ${message.author.username}`)
                                                    .addFields(
                                                        { name: 'Weather for today:', value: `${current}` },
                                                        { name: 'The forecast for your location:', value: `${forecastreply}` },
                                                    )
                                                message.channel.send(noinputEmbed)
                                                mongoose.connection.close()
                                            }
                                        }


                                    })
                                }
                                catch (err) {
                                    return message.channel.send("Unable To Get the data of Given location")
                                }
                            }
                            )
                        } else if (quote === 'no' && forecast === 'no') {
                            weather.find({ search: location.join(" "), degreeType: 'C' }, function (err, result) {
                                try {
                                    let current = `⛅️ Condition: **${result[0].current.skytext}** \n🌡 Temperature: **${result[0].current.temperature} C** \n 💨 Windspeed: **${result[0].current.winddisplay}** \n\n `
                                    let forec = result[0].forecast
                                    let forecastreply = 'Forecast:'
                                    for (const forecast of forec) {
                                        forecastreply += `**${forecast.shortday}** it will be between *${forecast.low} - ${forecast.high} C∘* and **${forecast.skytextday}** with ${forecast.precip}% rain. \n\n`
                                    } mongo().then(async (mongoose) => {
                                        let todocount = await todocountSchema.find({
                                            UserId,
                                        })
                                        if (todocount > 0) {
                                            let todoresults = await tododataSchema.find({
                                                UserId,
                                            })
                                            let sortmyresults = todoresults
                                            let todoreply = '**Your To-do List:** \n\n'
                                            for (const newresult of sortmyresults) {
                                                todoreply += `**${newresult.todocount})** *${newresult.todo}*\n`
                                            }

                                            let deadlines = await userSchema.find({
                                                UserID,
                                            })

                                            if (deadlines) {
                                                let deadlinereply = 'Here you go: \n\n'
                                                for (const deadline of deadlines) {
                                                    deadlinereply += `**${deadline.date}** deadline: *${deadline.dltext}*\n\n`
                                                }
                                                const exampleEmbed = new Discord.MessageEmbed()
                                                    .setColor('#337f4e')
                                                    .setTitle(`**Goodmorning!** ${message.author.username}`)
                                                    .addFields(
                                                        { name: 'Weather for today:', value: `${current}` },

                                                        { name: 'Your deadlines:', value: `${deadlinereply}` },

                                                        { name: 'Your remaining tasks:', value: `${todoreply}` },
                                                    )
                                                message.channel.send(exampleEmbed)
                                                mongoose.connection.close()
                                            }
                                            else {
                                                const todoembed = new Discord.MessageEmbed()
                                                    .setColor('#337f4e')
                                                    .setTitle(`**Goodmorning!** ${message.author.username}`)
                                                    .addFields(
                                                        { name: 'Weather for today:', value: `${current}` },

                                                        { name: 'Your remaining tasks:', value: `${todoreply}` },
                                                    )
                                                message.channel.send(todoembed)
                                                mongoose.connection.close()
                                            }
                                        }
                                        else {
                                            let deadlines = await userSchema.find({
                                                UserID,
                                            })

                                            if (deadlines) {
                                                let deadlinereply = 'Here you go: \n\n'
                                                for (const deadline of deadlines) {
                                                    deadlinereply += `**${deadline.date}** deadline: *${deadline.dltext}*\n\n`
                                                }
                                                const deadlineEmbed = new Discord.MessageEmbed()
                                                    .setColor('#337f4e')
                                                    .setTitle(`**Goodmorning!** ${message.author.username}`)
                                                    .addFields(
                                                        { name: 'Weather for today:', value: `${current}` },

                                                        { name: 'Your deadlines:', value: `${deadlinereply}` },
                                                    )
                                                message.channel.send(deadlineEmbed)
                                                mongoose.connection.close()
                                            }
                                            else {
                                                const noinputEmbed = new Discord.MessageEmbed()
                                                    .setColor('#337f4e')
                                                    .setTitle(`**Goodmorning!** ${message.author.username}`)
                                                    .addFields(
                                                        { name: 'Weather for today:', value: `${current}` },

                                                    )
                                                message.channel.send(noinputEmbed)
                                                mongoose.connection.close()
                                            }
                                        }
                                    })

                                } catch (err) {
                                    return message.channel.send("Unable To Get the data of Given location")
                                }
                            }
                            )
                        }
                    }
                    } else { message.reply('Use the setup please!') }
            } finally { message.reply('have a good day!') }
        })
    }
}



