module.exports = {
    name: '13-helpteam',
    description: "!code command that gives forest embed",
    execute(message, args){
        const Discord = require('discord.js');
        const teamembed = new Discord.MessageEmbed()
        .setColor('#337f4e')
        .addFields(
            { name: 'How to use the Study Team:', value: `The Study Team is designed to work together in a session. Once you have entered the command **!start** you will get added the role @Study Team. when a reminder is set for the group, you will get tagged. Use **!end** to leave the Team at any moment. 
            
            *Note: if setting a reminder for the Team, use @Study Team*` }
            )
    message.channel.send(teamembed);
        }
}