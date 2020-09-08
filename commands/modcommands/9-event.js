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
            { name: 'Server Events', value: `Not taking into account time or date, I might be interested in the following Server events: \n\n
            🔵 = Movie night. \n
            🟣 = Game day/night. \n
            🟠 = Server quiz \n
            🔴 = Not interested in any, keep it a study-focused server \n\n
            Please **react with the color** of your event of choice. Feel free to choose multiple events, a single one or none at all. Choosing an event does not automatically mean you have to attend. We will make another poll once the event has been chosen and a date and time has been set.` }
            )
    message.channel.send(hydraembed); 
    }
}