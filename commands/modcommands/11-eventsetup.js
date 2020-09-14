module.exports = {
    commands: ['setevent'],
    minArgs: 0,
    maxArgs: 0,


    callback: (message, arguments, text) => {
        const Discord = require('discord.js')
        const collector = new Discord.MessageCollector(message.channel, m => m.author.id === message.author.id, { time: 10000*10000 });
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
    }
}




