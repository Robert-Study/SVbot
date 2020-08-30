module.exports = {
    commands: ['sub', 'submission'],
    minArgs: 1,

    callback: (message, arguments, text) => {
        let channel = arguments[0]
        if(channel === 'app'){
            const Discord = require('discord.js');
            let appchannel = message.guild.channels.cache.get('708032923428716626');
            let apptext = text
            let AppEmbed = new Discord.MessageEmbed()
            .setColor('#337f4e')
            .setTitle(`${message.author.username} recommends this App:`)
            .setTimestamp()
            .setFooter(`Recommended by: ${message.author.username} `)
            .addFields(
                { name: 'App recommendation:', value: `${apptext}` })
        
            appchannel.send(AppEmbed);}
        else appchannel.send('Not found')
    }  
}

