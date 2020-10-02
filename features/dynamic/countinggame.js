const { Guild } = require('discord.js');

module.exports = (client) => {

    client.on("message", async (message) => {

        const messageCountSchema = require('@schemas/19-countschema')

        if (message.author.bot) return;

        if (message.channel.id === "751713825190969385") {
            let gamechannel = client.channels.cache.get('751713825190969385')
            let Guild = "703937875720273972"
            const mention = message.author
            const User = mention.id

            let count = await messageCountSchema.findOne({
                GuildID: Guild,
                UserID: 'countgame'
            })

            if (count) {

                let currentcount = count.number

                let usercount = message.content
                let lastcounter = count.lastuser
                let addone = (currentcount + 1)

                if (isNaN(usercount) || usercount != (addone) || User === lastcounter) {
                    let failure = await messageCountSchema.findOne({
                        GuildID: Guild,
                        UserID: 'countgame'
                    })


                    let savegame = failure.gameresc

                    if (savegame === 0) {
                        message.reply("That was the wrong number, there are no saves left.\nStart again at 1!")
                        let failure = await messageCountSchema.findOneAndUpdate(
                            {
                                UserID: 'countgame',
                            },
                            {
                                UserID: 'countgame',
                                number: 0,
                                lastuser: 'reset'
                            })


                        let userfailure = await messageCountSchema.findOneAndUpdate(
                            {
                                UserID: User,
                            },
                            {
                                UserID: User,
                                $inc: {
                                    wrong: 1,
                                },
                            },
                            {
                                upsert: true,
                                new: true,
                            })
                    } if (savegame > 0) {
                        message.reply(`That was the wrong number, luckily this server has ${savegame} save(s).\nCount on with the number **${addone}**`)
                        let savedgame = await messageCountSchema.findOneAndUpdate(
                            {
                                UserID: 'countgame',
                            },
                            {
                                UserID: 'countgame',
                                $inc: {
                                    gameresc: -1,
                                },
                            },
                            {
                                upsert: true,
                                new: true,
                            })


                    }



                }
                else {
                    let newcount = await messageCountSchema.findOneAndUpdate(
                        {
                            UserID: 'countgame',
                        },
                        {
                            UserID: 'countgame',
                            number: addone,
                            lastuser: User
                        })

                    let userscore = await messageCountSchema.findOneAndUpdate(
                        {
                            UserID: User,
                        },
                        {
                            UserID: User,
                            $inc: {
                                number: 1,
                            },
                        },
                        {
                            upsert: true,
                            new: true,
                        })

                    if (addone === 50) {
                        gamechannel.send(`GG <@${User}> you have counted to 50 and earned a save for the server!`)
                        let newsave = await messageCountSchema.findOneAndUpdate(
                            {
                                UserID: 'countgame'
                            },
                            {
                                UserID: 'countgame',
                                $inc: {
                                    gameresc: 1,
                                },
                            },
                            {
                                upsert: true,
                                new: true,
                            })
                    }


                    if (addone === 100) {
                        gamechannel.send(`GG <@${User}> you have counted to 50 and earned a save for the server!`)
                        let newsave = await messageCountSchema.findOneAndUpdate(
                            {
                                UserID: 'countgame'
                            },
                            {
                                UserID: 'countgame',
                                $inc: {
                                    gameresc: 1,
                                },
                            },
                            {
                                upsert: true,
                                new: true,
                            })
                    }

                    if (addone === 500) {
                        gamechannel.send(`GG <@${User}> you have counted to 500 and earned a save for the server!`)
                        let newsave = await messageCountSchema.findOneAndUpdate(
                            {
                                UserID: 'countgame'
                            },
                            {
                                UserID: 'countgame',
                                $inc: {
                                    gameresc: 1,
                                },
                            },
                            {
                                upsert: true,
                                new: true,
                            })
                    }

                    if (addone === 1000) {
                        gamechannel.send(`GG <@${User}> you have counted to 1000 and earned a save for the server!`)
                        let newsave = await messageCountSchema.findOneAndUpdate(
                            {
                                UserID: 'countgame'
                            },
                            {
                                UserID: 'countgame',
                                $inc: {
                                    gameresc: 1,
                                },
                            },
                            {
                                upsert: true,
                                new: true,
                            })
                    }

                    let resultG = await messageCountSchema.findOne({
                        UserID: 'highscore'
                    })


                    let highscore = resultG.number
                    if (highscore <= addone) {
                        let newhighscore = await messageCountSchema.findOneAndUpdate(
                            {
                                UserID: 'highscore'
                            }, {
                            UserID: 'highscore',
                            number: addone
                        })
                    }
                }
            }

        }

    })
}