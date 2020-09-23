

module.exports = (client) => {
    client.on('ready', async () => {


        var schedule = require('node-schedule');

        const logcountuserschema = require("@schemas/1-logcountuser")
        const todaycountschema = require("@schemas/2-logcountschema")

        const GuildID = "703937875720273972"

        var j = schedule.scheduleJob('48 * * * *', async function () {


            let newresult = await todaycountschema.update({
                GuildID: GuildID
            },
                {
                    daily: 0
                })


        })
    })
}
