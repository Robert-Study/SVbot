module.exports = (client) => {
    client.on('ready', async () => {
        
        const ms = require('ms')
        var moment = require('moment');
        var schedule = require('node-schedule');
        const teamtimerSchema = require('@schemas/18-teamtimerschema')
        let server = '703937875720273972'
        const timerchannel = client.channels.cache.get("732292791287283862")


        var j = schedule.scheduleJob('*/1 * * * *', async function () {
            let unlockresults = await teamtimerSchema.find({
                GuildID: server
            })

            if (unlockresults) {
                for (items of unlockresults) {
                    let remainingtime = items.remaining
                    let newremaining = await teamtimerSchema.updateMany(
                        {
                            GuildID: server
                        },
                        {
                            GuildID: server,
                            $inc: {
                                remaining: -1
                            },
                        },
                        {
                            upsert: true,
                            new: false,
                        }
                    )
                }
            }
        })
    })
}


