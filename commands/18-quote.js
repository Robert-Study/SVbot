module.exports = {
    name: '18-quote',
    description: "!focus command that enables focus mode",
    execute(message, args){
        const { randomQuotes } = require('./randomQuotes.json');
        const Discord = require('discord.js');
        message.channel.send(
            new Discord.MessageEmbed()
            .setColor('#000')
            .setAuthor(`Action By ${message.author.tag}`, message.author.displayAvatarURL({ dynamic: true }))
            .setThumbnail(message.author.displayAvatarURL({ dynamic: true }))
            .setTitle(`${message.author.username} Here Is Two Random Quotes:`)
            .addField( 'Random Quote 1:',`-->|${randomQuotes[Math.floor(Math.random() * randomQuotes.length )]}`)
            .addField( 'Random Quote 2:', `-->|${randomQuotes[Math.floor(Math.random() * randomQuotes.length )]}`)
            .setTimestamp()
        )
    }
}
