module.exports = {
    commands: ['event'],
    minArgs: 0,
    maxArgs: 0,


    callback: async (message, arguments, text) => {
        const Discord = require('discord.js');
        const eventschema = require('../../schemas/11-eventsetupschema')

        const mention = message.author
        const UserId = mention.id


        result = await eventschema.findOne({
            UserId,

        })

        console.log(`here are the ${result}`)

        for (items of result) {
            let provideddate = items.date
            let providedtime = items.time
            let providedheader = items.header
            let provideddescription = items.description
            
            console.log(provideddescription)

            let eventEmbed = new Discord.MessageEmbed()
                .setColor('#337f4e')
                .setTitle(`${providedheader}`)
                .setTimestamp()
                .setFooter(`Event host: ${message.author.username} `)
                .addFields(
                    { name: "New event", value: `**${message.author.username}** has planned an event, the event is open to attend for any verified member. A specific channel with the event title will be set up on the event date and time. Please, when attending, make sure you are on the specified time in the channel and **respect your host.** A reminder is set on the date 2 hours prior to the event, to receive a reminder click the ✅ reaction.` },
                    { name: "Date:", value: `${provideddate}`, inline: true },
                    { name: "Time:", value: `${providedtime}`, inline: true },
                    { name: "Event description:", value: `${provideddescription}` },
                )
            message.channel.send(eventEmbed)

        }
    }

}