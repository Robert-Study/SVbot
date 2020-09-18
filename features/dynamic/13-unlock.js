module.exports = (client) => {
    client.on('ready', async () => {
        var schedule = require('node-schedule');
        const lockSchema = require('@schemas/14-lockdata')
        let server = '703937875720273972'

        let lockrole = client.guild.roles.cache.find(role => role.name === "Locked in Focus");           
        let verifiedrole = client.guild.roles.cache.find(role => role.name === "Verified"); 
        let focusrole =  client.guild.roles.cache.find(role => role.name === "Focused");
        

        if(!lockrole) return console.log("Couldn't find the lock role.")
        if(!verifiedrole) return console.log("Couldn't find the lock role.")
        if(!focusrole) return console.log("Couldn't find the lock role.")

        var j = schedule.scheduleJob('*/1 * * * *', async function () {
            let unlockresults = lockSchema.find({
                guild: server
            })

            console.log(unlockresults)

            for (items of unlockresults) {
                let unlocktime = items.endtime
                let user = items.UserID
                console.log(unlocktime)

                let currenttime = new Date(Date.now());
                let current = moment(currenttime).format('DD/MM/YYYY-hh:mm')

                console.log(currenttime)

                if (unlocktime === current) {
                    user.roles.remove(role.id);
                    user.roles.remove(focusrole.id);
                    user.roles.add(verifiedrole.id);

                    console.log(role.id)
                    general.send(`${"<@" + user.id + ">"}, you have now been unlocked`)
                }
            }
        })
    })
}