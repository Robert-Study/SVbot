module.exports = (client) => {
    client.on('ready', async () => {

        var schedule = require('node-schedule');

        var j = schedule.scheduleJob('10 * * * *', async function () {
            const Deadlineschema = require("@schemas/3-deadlineschema")
            var moment = require('moment');
            const guild = client.guilds.cache.get('703937875720273972');
            

            let yesterday = moment().subtract(1, 'days')
            let yesterdayformat = moment(yesterday).format("DD/MM/YYYY")

            let yesterdayresults = await Deadlineschema.find({
                date: yesterdayformat
            })
            console.log(yesterdayresults)

            if (yesterdayresults) {
                for (results of yesterdayresults) {
                    let oldUserID = results.UserID

                    console.log(oldUserID)

                    guild.members.cache.get(oldUserID).roles.remove("755924266779672596")
                }
            }
        })
    })
}