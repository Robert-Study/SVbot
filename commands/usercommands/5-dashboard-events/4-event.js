module.exports = {
    commands: ['event'],
    minArgs: 0,
    maxArgs: 0,


    callback: async (message, arguments, text) => {
        const Discord = require('discord.js');
        const eventschema = require('@schemas/11-eventsetupschema')

        const mention = message.author
        const UserId = mention.id


        result = await eventschema.findOne({
            UserId,
        })

        let provideddate = result.date
        let providedtime = result.time
        let providedheader = result.header
        let provideddescription = result.description
        let providedbarcode = result.barcode
        if (providedbarcode > 0) {
            console.log(provideddescription)

            let eventEmbed = new Discord.MessageEmbed()
                .setColor('#28a1c9')
                .setTitle(`${providedheader}`)
                .setTimestamp()
                .setFooter(`Event host: ${message.author.username} `)
                .addFields(
                    { name: "New event", value: `**${message.author.username}** has planned an event, the event is open to attend for any verified member. A specific channel with the event title will be set up on the event date and time. Please, when attending, make sure you are on the specified time in the channel and **respect your host.** A reminder is set on the date 2 hours prior to the event, receive all host updates by clicking reaction in the event channel!` },
                    { name: "Date:", value: `${provideddate}`, inline: true },
                    { name: "Time:", value: `${providedtime}`, inline: true },
                    { name: "Event description:", value: `${provideddescription}` },
                )
                
            message.channel.send(eventEmbed)
        } else { message.reply('no event found!') }
    }
}

