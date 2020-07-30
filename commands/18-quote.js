module.exports = {
    name: '18-quote',
    description: "!focus command that enables focus mode",
    execute(message, args){
        const { randomQuotes } = require('./randomQuotes.json');
        const Discord = require('discord.js');
        message.channel.send(
            new Discord.MessageEmbed()
            .setColor('#000')
            .setThumbnail(message.author.displayAvatarURL({ dynamic: true }))
            .setTitle(`${message.author.username} Here is a personalized quote:`)
            .addField( 'Personalized quote:',`${randomQuotes[Math.floor(Math.random() * randomQuotes.length )]}`)
            .setTimestamp()
        )
    }
}
