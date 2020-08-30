
module.exports = {
    commands: ['info','help'],
    minArgs: 0,
    maxArgs: 0,
    callback: (message, arguments, text) => {
        const Discord = require('discord.js');
        const helpembed = new Discord.MessageEmbed()
            .setColor('#337f4e')
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