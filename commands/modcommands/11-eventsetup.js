module.exports = {
    commands: ['setevent'],
    minArgs: 0,
    maxArgs: 0,


    callback: (message, arguments, text) => {
        const Discord = require('discord.js')

        const collector = new Discord.MessageCollector(message.channel, m => m.author.id === message.author.id, { time: 10000 * 10000 });
        message.channel.send("Write where your submission should go, write 'app', 'tip' or 'event'")
        collector.once('collect', message => {
            let whatsub = message.content
            if (whatsub = 'app') {
                message.channel.send("Write a description of you app-suggestion")
                collector.once('collect', message => {

                    let apptext = message.content
                    message.delete()

                    let appchannel = message.guild.channels.cache.get('708032923428716626');
                    let AppEmbed = new Discord.MessageEmbed()
                        .setColor('#337f4e')
                        .setTitle(`${message.author.username} recommends this App:`)
                        .setTimestamp()
                        .setFooter(`Recommended by: ${message.author.username} `)
                        .addFields(
                            { name: 'App recommendation:', value: `${apptext}` })

                    let reactapp = await appchannel.send(AppEmbed);
                    reactapp.react('👍')
                    reactapp.react('👎')
                })
            }

            else if (whatsub = 'tip') {
                message.channel.send("Write a description of you app-suggestion")
                collector.once('collect', message => {

                    let tiptext = message.content
                    message.delete()

                    const Discord = require('discord.js');
                    let tipchannel = message.guild.channels.cache.get('708651085765804093');
                    let tipEmbed = new Discord.MessageEmbed()
                        .setColor('#337f4e')
                        .setTitle(`${message.author.username} has a study tip:`)
                        .setTimestamp()
                        .setFooter(`Recommended by: ${message.author.username} `)
                        .addFields(
                            { name: 'Study tip:', value: `${tiptext}` })

                    let reacttip = await tipchannel.send(tipEmbed);
                    reacttip.react('👍')
                    reacttip.react('👎')
                })
            }

            else if (whatsub = 'event') {
                let eventchannel = message.guild.channels.cache.get('708651085765804093');
                message.channel.send("Please write your events title.")
                collector.once('collect', message => {
                    let header = message.content
                    message.channel.send(`${header}`)
                    console.log(header)
                    if (header) {
                        message.channel.send("Please write the date of the event.")
                        collector.once('collect', message => {
                            let date = message.content
                            message.channel.send(`${date}`)
                            console.log(date)
                            if (date) {
                                message.channel.send("Please write the time of the event.")
                                collector.once('collect', message => {
                                    let time = message.content
                                    message.channel.send(`${time}`)
                                    console.log(time)
                                    if (time) {
                                        message.channel.send("Please write a description of the event (1200characters max!)")
                                        collector.once('collect', message => {
                                            let description = message.content
                                            message.channel.send(`${description}`)
                                            console.log(description)
                                            message.reply(`Your event is set, with ${header}, ${date} and ${time}`
                                            )
                                        })
                                    }
                                })
                            }
                        })
                    }
                })
            } else message.send('Please use the tags (#app or #tip) when making submissions!')
        })
    }
}




