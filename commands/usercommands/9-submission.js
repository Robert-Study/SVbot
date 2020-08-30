module.exports = {
    commands: ['sub', 'submission'],
    minArgs: 1,
    expectedArgs : '<!sub #app> or <!sub #tip>',

    callback: async(message, arguments, text) => {
        let channel = arguments[0]
        if(channel === '#app'){
            message.delete()
            const Discord = require('discord.js');
            let appchannel = message.guild.channels.cache.get('708032923428716626');
            let apptext = arguments.slice(1).join(" ")
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
            }
        
        
        else if(channel === '#tip'){
            message.delete()
            const Discord = require('discord.js');
            let tipchannel = message.guild.channels.cache.get('708651085765804093');
            let tiptext = arguments.slice(1).join(" ")
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
                }
        
        else message.send('Please use the tags (#app or #tip) when making submissions!')
    }  
}

