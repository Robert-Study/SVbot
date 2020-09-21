module.exports = (client) => {
    client.on('ready', async () => {
        const ms = require('ms')
        var moment = require('moment');
        var schedule = require('node-schedule');
        const lockSchema = require('@schemas/14-lockdata')
        let server = '703937875720273972'
        const general = client.channels.cache.get("703937876634894388")
        

        var j = schedule.scheduleJob('*/1 * * * *', async function () {
            let unlockresults = await lockSchema.find({
                guild: server
            })
            
            

            if (unlockresults) {
                for (items of unlockresults) {
                    let unlocktime = items.endtime
                    let user = items.UserID
                    let unlockserver = items.guild
                    let guild = client.guilds.cache.get(unlockserver)


                    

                    let currenttime = new Date(Date.now());
                    let current = moment(currenttime).format('DD/MM/YYYY-hh:mm')

                    

                    if (unlocktime === current) {
                        guild.members.cache.get(user).roles.remove("735089477088837673")
                        guild.members.cache.get(user).roles.remove("729706682308886548")
                        guild.members.cache.get(user).roles.add("707547622591692911")

                        
                        
                        general.send(`${"<@" + user + ">"}, you have now been **🔐 unlocked** 🔐`)
                    }
                }
            }
        })
    })
}