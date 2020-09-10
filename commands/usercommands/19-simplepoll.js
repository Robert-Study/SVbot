module.exports = {
    commands: ['poll', 'simplepoll'],
    minArgs: 1,
    expectedArgs: '<!poll text>',

    callback: async (message, arguments, text) => {
        const Discord = require('discord.js');

        let exampleEmbed = new Discord.MessageEmbed()
            .setColor('#337f4e')
            .setTimestamp()
            .addFields(
                { name: `Poll by: ${message.author.username}`, value: `${text}` })

        let channelembed = await message.channel.send(exampleEmbed);
        channelembed.react('👍')
        channelembed.react('👎')
        message.delete()

    }

}
