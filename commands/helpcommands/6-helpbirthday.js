module.exports = {
    commands: ['infobirthday', 'helpbd'],
    minArgs: 0,
    maxArgs: 0,
    callback: (message, arguments, text) => {
        const Discord = require('discord.js');
        const focusembed = new Discord.MessageEmbed()
        .setColor('#337f4e')
        .addFields(
            { name: 'Set up your Birthday!', value: ` If you want to be added to the Birthday list and get mentioned on your birthday in the server (+birthday role) use: **!bdadd DD/MM** (*example: !bdadd 28/12*). 
            *Note: use the DD/MM structure!*
            Use: **!bdremove** to remove yourself from the birthday list.` }
            )
    message.channel.send(focusembed);
    }
}