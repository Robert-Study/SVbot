module.exports = {
    commands: ['poll', 'advancedpoll', 'mcpoll'],
    minArgs: 1,
    expectedArgs: '<!poll text options split with = sign>',

    callback: async (message, arguments, text) => {
        const Discord = require('discord.js');
        const { content } = message
        const eachLine = content.split('\n')

        for (const line of eachLine) {
            if (line.includes('=')) {
                const split = line.split('=')
                const emoji = split[0].trim()

                let suggestembed = new Discord.MessageEmbed()
                .setColor('#337f4e')
                .setTimestamp()
                .addFields(
                    { name: `Poll:`, value: `${text}` })
                let channelembed = await message.channel.send(exampleEmbed);
                channelembed.react(emoji)
            }
        }

    }
}