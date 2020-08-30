
module.exports = {
    commands: ['info','help'],
    minArgs: 0,
    maxArgs: 0,
    callback: (message, arguments, text) => {
        const Discord = require('discord.js');
        const helpembed = new Discord.MessageEmbed()
            .setColor('#337f4e')
            .setThumbnail('http://borgenproject.org/wp-content/uploads/Twitter.jpg')
            .setTimestamp()
            .setFooter(`Requested by: ${message.author.username} `)
            .addFields(
                { name: 'Todo-bot', value: '!infotodo', inline: true },
                { name: `Hydra`, value: '!infohydra' , inline: true},
                { name: 'Focus', value:'!infofocus' , inline: true},
                { name: `Studyteam`, value: '!infoteam' , inline: true},
                { name: `Birthday-bot`, value: '!infobirthday' , inline: true},
                { name: `Timers`, value: '!infotimer' , inline: true},
                { name: `Forest`, value: '!infoforest', inline: true },
                { name: `Private VCs`, value: '!infovc' , inline: true},
                { name: `Support`, value: '!infoticket' , inline: true},
                { name: `Submissions`, value: '!infosub' , inline: true},
                { name: `Deadlines`, value: '!infodl', inline: true },
                { name: `Commands`, value: '!infocmd', inline: true },
                    )
        message.channel.send(helpembed);
        }
}