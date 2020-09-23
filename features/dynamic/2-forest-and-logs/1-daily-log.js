module.exports = (client) => {
    client.on('ready', async () => {


        var schedule = require('node-schedule');

        
        const todaycountschema = require("@schemas/1-logcountuser")

        const GuildID = "703937875720273972"

        var j = schedule.scheduleJob('0 2 * * *', async function () {


            let newresult = await todaycountschema.updateMany(
                {
                    GuildID: GuildID
                },
                {
                    $set:
                    {
                        daily: 0,

                    }
                }
            )
            console.log(newresult)
        })

        var K = schedule.scheduleJob('1 2 * * 7', async function () {


            let newresult = await todaycountschema.updateMany(
                {
                    GuildID: GuildID
                },
                {
                    $set:
                    {
                        daily: 0,
                        weekly: 0,

                    }
                }
            )
            console.log(newresult)
        })

        var L = schedule.scheduleJob('2 2 1 * *', async function () {


            let newresult = await todaycountschema.updateMany(
                {
                    GuildID: GuildID
                },
                {
                    $set:
                    {
                        daily: 0,
                        weekly: 0,
                        monthly: 0,

                    }
                }
            )
            console.log(newresult)
        })

    })
}
