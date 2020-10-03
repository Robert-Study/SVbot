module.exports = (client) => {

    client.on("message", async (message) => {
        const ms = require('ms')
        var moment = require('moment');
        var schedule = require('node-schedule');
        const simonSchema = require('@schemas/21-simonschema')
        let server = '703937875720273972'
        const gamechannel = client.channels.cache.get("759487772993126460")


        var j = schedule.scheduleJob('*/1 * * * *', async function () {
            let A = await simonSchema.findOne({
                GuildID: server,
                UserID: 'gameset'
            })

            if (A) {
                let simontime = A.time
                let currenttime = new Date(Date.now());
                let current = moment(currenttime).format('DD/MM/YYYY-hh:mm')

                if (current === simontime) {
                    const Discord = require('discord.js')
                    const collector = new Discord.MessageCollector(message.channel, m => m.author.id === message.author.id, { time: 60 * 10000 });
                    const { simonWords } = require('@JSON/simonWords.json');
                    randomword = simonWords[Math.floor(Math.random() * simonWords.length)]

                    gamechannel.send(`Simon says: **${randomword}**\nReply me with the same word to get a point.`)
                    collector.once('collect', async message => {
                        try {
                            let userresponse = message.content.toLowerCase()
                            const mention = message.author
                            const user = mention.id
                            if (userresponse === randomword) {

                                let B = await simonSchema.findOneAndUpdate(
                                    {
                                        GuildID: Guild,
                                        UserID: user,
                                    },
                                    {
                                        UserID: user,
                                        $inc: {
                                            number: 1,
                                            wrong: 0
                                        },
                                    },
                                    {
                                        upsert: true,
                                        new: true,
                                    })

                                let Ba = await simonSchema.findOneAndUpdate(
                                    {
                                        GuildID: Guild,
                                        UserID: 'gameset',
                                    },
                                    {
                                        UserID: 'gameset',
                                        $inc: {
                                            number: 1,
                                            wrong: 0
                                        },
                                    },
                                    {
                                        upsert: true,
                                        new: true,
                                    })

                                let C = await simonSchema.findOne({
                                    GuildID: server,
                                    UserID: user
                                })

                                if (C) {
                                    let userscore = C.number
                                    let userwrong = C.wrong
                                    message.reply(`that was the correct response, adding one point.\nYour total score is now ${userscore} correct, ${userwrong} wrong responses`)
                                } else { gamechannel.send("Something went wrong, error 12") }

                            } if (userresponse != randomword) {
                                let D = await simonSchema.findOneAndUpdate(
                                    {
                                        GuildID: Guild,
                                        UserID: user,
                                    },
                                    {
                                        UserID: user,
                                        $inc: {
                                            number: 0,
                                            wrong: 1
                                        },
                                    },
                                    {
                                        upsert: true,
                                        new: true,
                                    })

                                let Da = await simonSchema.findOneAndUpdate(
                                    {
                                        GuildID: Guild,
                                        UserID: 'gameset',
                                    },
                                    {
                                        UserID: 'gameset',
                                        $inc: {
                                            number: 0,
                                            wrong: 1
                                        },
                                    },
                                    {
                                        upsert: true,
                                        new: true,
                                    })

                                let E = await simonSchema.findOne({
                                    GuildID: server,
                                    UserID: user
                                })

                                if (E) {
                                    let userscore = E.number
                                    let userwrong = E.wrong
                                    message.reply(`You got it wrong this time!.\nYour total score is now ${userscore} correct, ${userwrong} wrong responses`)
                                } else { gamechannel.send("Something went wrong, error 13") }

                            }
                        } catch { gamechannel.send('No one responded to me in time. Wait for the next word.') }
                    })

                } let randomize = Math.floor(Math.random() * 20) + 1;
                let randomminute = `${randomize}m`
                let addthis = ms(`${randomminute}`)

                let startTime = new Date(Date.now());
                let endTime = new Date(startTime.getTime() + addthis);
                let structuretime = moment(endTime).format('DD/MM/YYYY-hh:mm')

                let F = await simonSchema.findOneAndUpdate(
                    {
                        GuildID: Guild,
                        UserID: 'gameset',
                    },
                    {
                        UserID: 'gameset',
                        time: structuretime

                    },
                    {
                        upsert: true,
                        new: true,
                    })
            }
        })
    })
}