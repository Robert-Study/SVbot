module.exports = (client) => {
    client.on('ready', async () => {

        var schedule = require('node-schedule');

        var j = schedule.scheduleJob('22 * * * *', async function () {
            const Deadlineschema = require("@schemas/3-deadlineschema")
            const birthdayschema = require("@schemas/13-birthdayschema")
            var moment = require('moment');
            const guild = client.guilds.cache.get('703937875720273972');


            let yesterday = moment().subtract(1, 'days')
            let yesterdayformat = moment(yesterday).format("DD/MM/YYYY")
            let birthdayformat = moment(yesterday).format("DD/MM")

            let yesterdayresults = await Deadlineschema.find({
                date: yesterdayformat
            })
            console.log(yesterdayresults)

            if (yesterdayresults) {
                for (results of yesterdayresults) {
                    let oldUserID = results.UserID

                    console.log(oldUserID)

                    guild.members.cache.get(oldUserID).roles.remove("755924266779672596")
                };

            }
            let birthdayresults = await birthdayschema.find({
                date: birthdayformat
            })
            console.log(birthdayresults)

            if (birthdayresults) {
                for (results of birthdayresults) {
                    let oldUserID = results.UserID

                    guild.members.cache.get(oldUserID).roles.remove("712563894350250034")
                }
            }

            console.log('Birthdays today!');
        })
    })
}

//712563894350250034
//422751083010457600