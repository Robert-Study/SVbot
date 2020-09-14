module.exports = {
    commands: ['setevent'],
    minArgs: 0,
    maxArgs: 0,


    callback: (message, arguments, text) => {
        const Discord = require('discord.js')
        const collector = new Discord.MessageCollector(message.channel, m => m.author.id === message.author.id, { time: 10000 });
        message.channel.send("Please write your age.")
        collector.once('collect', message => {
            let age = message.content
            message.channel.send(`${age}`)
            console.log(age)
            if (age) {
                message.channel.send("Please write your date.")
                collector.once('collect', message => {
                    let date = message.content
                    message.channel.send(`${date}`)
                    console.log(date)
                    if (date) {
                        message.channel.send("Please write your description.")
                        collector.once('collect', message => {
                            let date = message.content
                            message.channel.send(`${date}`)
                            console.log(date)

                        })
                    }
                })
            }
        })
    }
}





