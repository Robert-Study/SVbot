module.exports = (client) => {
    client.on('ready', async () => {
        var schedule = require('node-schedule');

        var j = schedule.scheduleJob('45 * * * *', function () {
            const Deadlineschema = require("@schemas/3-deadlineschema")
            var moment = require('moment');
            const Discord = require('discord.js');
            const testchannel = guild.channels.cache.get('754042973850828821')

            let current = moment().format("DD/MM/YYYY")
            console.log(current)

            let dlresults = await Deadlineschema.find({
                date: current
            })
            console.log(dlresults)


            if (dlresults) {
                let reply = ''
                try {
                    for (items of dlresults) {
                        let User = await message.guild.members.fetch(items.UserID)
                        let deadline = items.dltext
                        console.log(deadline)

                        reply += `**${User}** deadline: *${deadline}*\n\n`
                    }
                } finally {
                    const todayEmbed = new Discord.MessageEmbed()
                        .setColor('#337f4e')
                        .setTitle(`Todays deadlines:`)
                        .addFields(
                            { name: 'Deadlines:', value: `${reply}` },
                        )

                    let reacttoday = await testchannel.send(todayEmbed);
                    reacttoday.react('🍀')
                }
            }



            console.log('The answer to life, the universe, and everything!');

        });
    })
}