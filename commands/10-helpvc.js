module.exports = {
    name: '10-helpvc',
    description: "!code command that gives forest embed",
    execute(message, args){
        const Discord = require('discord.js');
        const vcembed = new Discord.MessageEmbed()
            .setColor('#337f4e')
            .addFields(
                { name: 'Private Voice-Channels', value: 
                `Click the -Join to Create VC- to create a private room, **user commands:**
            
                1). **!voice lock/unlock** : 
                locks or unlocks a room so that no one else is able to join. 
                2). **!voice name** "*channelname*" : 
                changes the name of your created channel.
                3). **!voice claim** : gives you ownership over a created channel` }
            )
    message.channel.send(vcembed);
        }
}