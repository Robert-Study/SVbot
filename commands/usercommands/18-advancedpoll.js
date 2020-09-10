module.exports = {
    commands: ['mc', 'advancedpoll', 'mcpoll'],
    minArgs: 1,
    expectedArgs: '<!poll text options split with = sign>',

    callback: async (message, arguments, text) => {
        const Discord = require('discord.js');
        const { content } = message
        const eachLine = content.split('\n')

        let exampleEmbed = new Discord.MessageEmbed()
            .setColor('#337f4e')
            .setTimestamp()
            .addFields(
                { name: `Poll:`, value: `${text}` })
            .setFooter(`Poll by: ${message.author.username} `)

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