module.exports = (client) => {
    client.on('ready', async () => {
        var schedule = require('node-schedule');

        var j = schedule.scheduleJob('1 2 * * *', async function () {
            const birthdayschema = require("@schemas/13-birthdayschema")
            var moment = require('moment');
            const Discord = require('discord.js');
            const announcementchannel = client.channels.cache.get('732559541895561226')

            let current = moment().format("DD/MM")
            let yesterday = moment().subtract(1, 'days').format("DD/MM")

            console.log(current)
            console.log(yesterday)

            let bdresults = await birthdayschema.find({
                date: current
            })
            console.log(bdresults)

            if (bdresults && bdresults.length > 0) {


                bdresults.forEach(async items => {
                    let User = await client.users.fetch(items.UserID)
                    let UserId = items.UserID
                    let server = items.guild

                    let guild = client.guilds.cache.get(server)

                    guild.members.cache.get(UserId).roles.add("712563894350250034")
                    console.log(User)
                    let reply = `🎈Happy birthday🎈\n ${current}: ${User}\n`



                    const todayEmbed = new Discord.MessageEmbed()
                        .setColor('#990608')
                        .setTitle(`Birthday today!`)
                        .addFields(
                            { name: `\u200B`, value: `**${reply}**\n*We all wish you a very nice day!🎉* ` },
                        )
                    let reacttoday = await announcementchannel.send(todayEmbed);
                    reacttoday.react('🎉')
                    reacttoday.react('🎈')
                    reacttoday.react('🥳')
                })
            }

            let yesterdayresults = await birthdayschema.find({
                date: yesterday
            })
            console.log(yesterdayresults)

            if (yesterdayresults) {
                for (results of yesterdayresults) {
                    let oldUserID = results.UserID

                    guild.members.cache.get(oldUserID).roles.remove("712563894350250034")
                }
            }

            console.log('Birthdays today!');

        });
    })
}