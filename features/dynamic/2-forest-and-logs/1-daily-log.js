const { schema } = require('../../../schemas/1-logcountuser');

module.exports = (client) => {
    client.on('ready', async () => {
        return

        var schedule = require('node-schedule');

        const logcountuserschema = require("@schemas/1-logcountuser")
        const todaycountschema = require("@schemas/2-logcountschema")

        const GuildID = "703937875720273972"

        var j = schedule.scheduleJob('0 5 * * *', async function () {
            let today = await todaycountschema.find({
                GuildID: GuildID,
            })

            if (today) {
                for (items of today) {
                    let todaycount = items.daily
                    console.log(todaycount)
                }

                let newresult = await todaycountschema.update({
                    GuildID: GuildID
                },
                {
                    daily: 0
                })

            }
        })
    })
}
