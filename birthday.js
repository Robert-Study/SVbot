/*module.exports = (client) => {
    client.on('ready', async () => {
        var schedule = require('node-schedule');

        var j = schedule.scheduleJob('1 0 * * *', async function () {
            const birthdayschema = require("@schemas/13-birthdayschema")
            var moment = require('moment');
            const Discord = require('discord.js');
            const announcementchannel = client.channels.cache.get('732559541895561226')

            let current = moment().format("DD/MM/YYYY")
            let yesterday = moment().subtract(1, 'days').format("DD/MM/YYYY")

            const guild = client.guilds.cache.get(serverID);
            if (!guild) return console.log("Couldn't get the guild.");

            console.log(current)
            console.log(yesterday)

            let bdresults = await birthdayschema.find({
                date: current
            })
            console.log(bdresults)


            if (bdresults) {
                let reply = '🎈Happy birthday🎈 to'
                try {
                    for (items of bdresults) {
                        let User = await client.users.fetch(items.UserID)
                        let UserId = items.UserID

                        guild.members.cache.get(UserId).roles.add("755924266779672596")

                        reply += `**${User}**`
                    }
                } finally {
                    const todayEmbed = new Discord.MessageEmbed()
                        .setColor('#28a1c9')
                        .setTitle(`Birthdays today!`)
                        .addFields(
                            { name: '${reply}', value: `*We all wish you a very nice day!🎉*` },
                        )

                    let reacttoday = await announcementchannel.send(todayEmbed);
                    reacttoday.react('🎉')
                    reacttoday.react('🎈')
                    reacttoday.react('🥳')
                }
            }

            let yesterdayresults = await birthdayschema.find({
                date: yesterday
            })
            console.log(yesterdayresults)

            if (yesterdayresults) {
                for (results of yesterdayresults) {
                    let oldUserID = results.UserID

                    guild.members.cache.get(oldUserID).roles.remove("755924266779672596")
                }
            }

            console.log('Birthdays today!');

        });
    })
}*/