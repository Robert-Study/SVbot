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
            { name: 'Poll server conversation', value: `After the succes of yesterdays server-Voice Call, Heleen wants to make this a monthly recurring event. Therefore a poll to see who is available and which date suits everyone best. The call will probably start at 19:00 GMT+2 but this can be changed when the chosen date arises. The dates we can choose from for October: \n\n
            🔵 = October 1st (01-10-2020). \n
            🟠 = October 9'th (09-10-2020). \n

            Please **react with the color** of your date of choice. Feel free to choose multiple events, a single one or none at all.\n\n
            Also because of the super high number of votes on 'Movie Night' in the poll in the #events channel we will go ahead and schedule this too.` }
            )
    message.channel.send(hydraembed); 
    }
}