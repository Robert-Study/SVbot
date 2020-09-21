module.exports = (client) => {
    client.on('ready', async () => {

        var schedule = require('node-schedule');

        var j = schedule.scheduleJob('0 5 * * *', async function () {
            const Deadlineschema = require("@schemas/3-deadlineschema")
            var moment = require('moment');
            const Discord = require('discord.js');
            const announcementchannel = client.channels.cache.get('732559541895561226')

            let current = moment().format("DD/MM/YYYY")
            let yesterday = moment().subtract(1, 'days').format("DD/MM/YYYY")

            const guild = client.guilds.cache.get('703937875720273972');
            if (!guild) return console.log("Couldn't get the guild.");

            console.log(current)
            console.log(yesterday)

            let dlresults = await Deadlineschema.find({
                date: current
            })
            console.log(dlresults)


            if (dlresults && dlresults.length > 0) {
                let reply = ':'
                try {
                    for (items of dlresults) {
                        try {
                            let User = await client.users.fetch(items.UserID)

                            let UserId = items.UserID
                            let deadline = items.dltext
                            console.log(deadline)
                            guild.members.cache.get(UserId).roles.add("755924266779672596")

                            reply += `${User} deadline: *${deadline}*\n\n`

                        } catch { console.log('user-not found') }
                    }
                } finally {
                    const todayEmbed = new Discord.MessageEmbed()
                        .setColor('#28a1c9')
                        .setTitle(`Deadlines today:`)
                        .addFields(
                            { name: 'Deadlines:', value: `${reply}` },
                        )

                    let reacttoday = await announcementchannel.send(todayEmbed);
                    reacttoday.react('🍀')
                }
            } else { announcementchannel.send('No deadlines for today!') }

            let yesterdayresults = await Deadlineschema.find({
                date: yesterday
            })
            console.log(yesterdayresults)

            if (yesterdayresults) {
                for (results of yesterdayresults) {
                    let oldUserID = results.UserID

                    console.log(oldUserID)

                    guild.members.cache.get(oldUserID).roles.remove("755924266779672596")
                }
            }

            console.log('Sending the deadlines of today to announcements');

        });
    })
}