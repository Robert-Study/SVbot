module.exports = {
    commands: ['sub', 'submission'],
    minArgs: 1,
    expectedArgs : '<!sub #app> or <!sub #tip>',

    callback: (message, arguments, text) => {
        let channel = arguments[0]
        if(channel === '#app'){
            message.delete()
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
        
        else if(channel === '#tip'){
            message.delete()
            const Discord = require('discord.js');
            let tipchannel = message.guild.channels.cache.get('708651085765804093');
            let tiptext = text
            let AppEmbed = new Discord.MessageEmbed()
                .setColor('#337f4e')
                .setTitle(`${message.author.username} has a studytip:`)
                .setTimestamp()
                .setFooter(`Recommended by: ${message.author.username} `)
                .addFields(
                    { name: 'Study tip:', value: `${tiptext}` })
            
            tipchannel.send(AppEmbed);}
        
        else message.send('Please use the tags when making submissions!')
    }  
}

