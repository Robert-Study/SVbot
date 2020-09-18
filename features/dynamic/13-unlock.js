module.exports = (client) => {
    client.on('ready', async () => {
        var schedule = require('node-schedule');
        const lockSchema = require('@schemas/14-lockdata')
        let server = '703937875720273972'

        var j = schedule.scheduleJob('*/1 * * * *', async function () {
            let unlockresults = await lockSchema.find({
                guild: server
            })

            console.log(unlockresults)

            if (unlockresults) {
                let unlocktime = unlockresults.endtime
                let user = unlockresults.UserID
                let unlockserver = unlockresults.guild
                let guild = client.guilds.cache.get(unlockserver)

                console.log(unlocktime)

                let currenttime = new Date(Date.now());
                let current = moment(currenttime).format('DD/MM/YYYY-hh:mm')

                console.log(currenttime)

                if (unlocktime === current) {
                    guild.members.cache.get(UserId).roles.remove("735089477088837673")
                    guild.members.cache.get(UserId).roles.remove("729706682308886548")
                    guild.members.cache.get(UserId).roles.add("712563894350250034")

                    console.log(role.id)
                    const general = client.channels.cache.get('707547622591692911')
                    general.send(`${"<@" + user.id + ">"}, you have now been unlocked`)
                }
            }
        })
    })
}