module.exports = (client) => {
    client.on('ready', async () => {
        var schedule = require('node-schedule');

        var j = schedule.scheduleJob('22 * * * *', async function () {
            const birthdayschema = require("@schemas/13-birthdayschema")
            var moment = require('moment');
            const Discord = require('discord.js');
            const announcementchannel = client.channels.cache.get('754042973850828821')

            let current = moment().format("DD/MM")
            let yesterday = moment().subtract(1, 'days').format("DD/MM")

            const guild = client.guilds.cache.get(serverID);
            if (!guild) return console.log("Couldn't get the guild.");

            console.log(current)
            console.log(yesterday)

            let bdresults = await birthdayschema.find({
                date: current
            })
            console.log(bdresults)

            if (bdresults && bdresults.length > 0) {
                let reply = '🎈Happy birthday🎈 to'
                try {
                    for (items of bdresults) {
                        let User = await client.users.fetch(items.UserID)
                        let UserId = items.UserID
                        let server = items.guild

                        let guild = client.guilds.get(server)


                        if (guild) {
                            channel = guild.channels.get('754042973850828821');
                            if (channel) {
                                channel.send("Here you can put the message and stuffs.")
                            }
                            else { console.log("There's no channel with that ID.") }
                        } else { console.log("There's no guild with that ID."); }
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
}