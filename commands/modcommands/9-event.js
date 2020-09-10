module.exports = {
    commands: ['event'],
    minArgs: 0,
    maxArgs: 0,
    permissions: 'BAN_MEMBERS',

    callback: (message, arguments, text) => {
        const Discord = require('discord.js');
        const hydraembed = new Discord.MessageEmbed()
        .setColor('#1a9cd8')
        .addFields(
            { name: 'Event Notifications', value: `It has been brought to our attention that using colours to vote might not be the best way as people suffering from colorblindness might have difficulties voting. We appologize for this and will use other emojis for polls in the feature! \n
            If you want to stay informed of the events and polls in this channel, please click the 🔔 reaction below!`}
            )
    message.channel.send(hydraembed); 
    }
}