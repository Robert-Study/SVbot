const Deadlineschema = require("@schemas/3-deadlineschema")
var moment = require('moment');
const Discord = require('discord.js');


module.exports = {
    commands: ['today', 'dltoday', 'todaydl'],
    minArgs: 0,
    maxArgs: 0,

    callback: async (message, arguments, text) => {
        message.reply('please use this command in the deadlinechannel next time')
        const deadlinechannel = message.client.channels.cache.get('717829409679343628');
        let current = moment().format("DD/MM/YYYY")
        console.log(current)

        let dlresults = await Deadlineschema.find({
            date: current
        })
        console.log(dlresults)

        if (dlresults && dlresults.length > 0) {
            let reply = '.'
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

                let reacttoday = await deadlinechannel.send(todayEmbed);
                reacttoday.react('🍀')
            }
        }else{message.reply('no deadlines for today')}
    }
}