module.exports = {
    commands: ['mc', 'advancedpoll', 'mcpoll'],
    minArgs: 1,
    expectedArgs: '<!poll text options split with = sign>',

    callback: async (message, arguments, text) => {
        const Discord = require('discord.js');
        const { content } = message
        const eachLine = content.split('\n')

        let exampleEmbed = new Discord.MessageEmbed()
            .setColor('#1a9cd8')
            .setTimestamp()
            .addFields(
                { name: `Movie night genre poll:`, value: `${text}` })

        let channelembed = await message.channel.send(exampleEmbed);
        message.delete()

        for (const line of eachLine) {
            if (line.includes('=')) {
                const split = line.split('=')
                const emoji = split[0].trim()


                channelembed.react(emoji)

            }

        }
    }
}