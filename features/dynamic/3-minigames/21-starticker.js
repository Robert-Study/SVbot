module.exports = (client) => {
    client.on('ready', async () => {

        const ms = require('ms')
        var moment = require('moment');
        var schedule = require('node-schedule');
        const starschema = require('@schemas/22-starbarschema')
        let server = '703937875720273972'
        let botid = '733824756746420267'
        const gamechannel = client.channels.cache.get("759487772993126460")

        var j = schedule.scheduleJob('5 * * * *', async function () {
            let A = await starschema.findOne({
                GuildID: server,
                UserID: 'current'
            })

            if (A) {
                let currenttick = A.ticker
                if (currenttick === 5) {
                    let B = await starschema.findOneAndUpdate(
                        {
                            GuildID: server,
                            UserID: 'current',
                        },
                        {
                            UserID: 'current',
                            ticker: 0
                        },
                        {
                            upsert: true,
                            new: true,
                        })
                }
                else {
                    let C = await starschema.findOneAndUpdate(
                        {
                            GuildID: server,
                            UserID: 'current',
                        },
                        {
                            UserID: 'current',
                            $inc: {
                                ticker: 1
                            },
                        },
                        {
                            upsert: true,
                            new: true,
                        })
                }

            }
        })
    })
}