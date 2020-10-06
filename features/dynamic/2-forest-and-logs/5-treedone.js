
module.exports = (client) => {
    client.on('ready', async () => {
        const ms = require('ms')
        var moment = require('moment');
        var schedule = require('node-schedule');
        const forestSchema = require('@schemas/17-forestschema')
        let server = '703937875720273972'
        const general = client.channels.cache.get("703937876634894388")


        var j = schedule.scheduleJob('*/1 * * * *', async function () {
            let unlockresults = await forestSchema.find({
                GuildID: server
            })



            if (unlockresults) {
                for (items of unlockresults) {
                    let unlocktime = items.endtime

                    let currenttime = new Date(Date.now());
                    let current = moment(currenttime).format('DD/MM/YYYY-hh:mm')

                    if (unlocktime === current) {
                        let cleargroup = await forestSchema.findOneAndUpdate(
                            {
                                endtime: current
                            },
                            {
                                taken: 0,
                                time: 0,
                                endtime: 'zero',
                                number: 0
                            },
                            {
                                upsert: false,
                                new: false

                            })
                    }
                }
            }
        })
    })
}
