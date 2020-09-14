module.exports = {
    commands: ['setevent'],
    minArgs: 0,
    maxArgs: 0,


    callback: (message, arguments, text) => {
        const collector = new Discord.MessageCollector(message.channel, m => m.author.id === message.author.id, { time: 10000 });
        message.channel.send("Please write your age.")
        collector.on('collect', message => {
            let age = message.content
            message.channel.send(`${age}`)
            console.log(age)
        })
    }
}

        
        

            
                