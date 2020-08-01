module.exports = {
    name: '1-cal',
    description: "calendar command",
    execute (message,args) {
        const Discord = require('discord.js');
        const channel = message.client.channels.cache.get('703937876634894388');
        let exampleEmbed = new Discord.MessageEmbed()
            .setColor('#337f4e')
            .setTitle(`${message.author.username} wants to plant a tree! :evergreen_tree:`)
            .setThumbnail('https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2F1.bp.blogspot.com%2F-E77muf7rE5k%2FUD5FaQznK8I%2FAAAAAAAAIh4%2FGJXlKvLB7WM%2Fs1600%2FTree%2BIn%2BField%2BWallpapers%2B3.jpg&f=1&nofb=1')
            .setTimestamp()
            .setFooter(`Planter: ${message.author.username} `)
            .addFields(
                { name: '\u200B', value: 'Forest info:' },
                { name: `Use code: ${args[0]} or click this link: https://www.forestapp.cc/join-room?token=${args[0]}.`, value: '\u200B' },
                { name: ':stopwatch: Duration:', value:`${args[1]}` , inline: true},
                { name: ':closed_lock_with_key: Starting in:', value: `${args[2]}`, inline: true},
                { name: '\u200B', value: 'Good luck! :palm_tree: | Join the team 👥 or go in focus 🔇 by reacting.' }
                )

        let channelembed = async(exampleEmbed) => {await channel.send(exampleEmbed)};
        channelembed.react('👥')
        channelembed.react('🔇')

        const welcome = message.client.channels.cache.get('732292791287283862');
        
        let welcomeembed = async(exampleEmbed) => {await welcome.send(exampleEmbed)};
        welcomeembed.react('👥')
        welcomeembed.react('🔇')
        }    
    }

