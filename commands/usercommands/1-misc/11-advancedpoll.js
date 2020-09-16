module.exports = {
    commands: ['mc', 'advancedpoll', 'mcpoll'],
    minArgs: 1,
    expectedArgs: '<!poll text options split with = sign>',

    callback: async (message, arguments, text) => {
        const Discord = require('discord.js');
        const { content } = message
        //split the content (message) for each line
        const eachLine = content.split('\n')

        //creating an embed with the text of the user
        let pollembed = new Discord.MessageEmbed()
            .setColor('#1a9cd8')
            .setTimestamp()
            .addFields(
                { name: `Poll:`, value: `${text}` })
            .setFooter(`Poll by: ${message.author.username} `)

        //send the embed-delete original message
        let reactembed = await message.channel.send(pollembed);
        message.delete()

        //react with emoji - if line has '=' emoji is argument before '='
        for (const line of eachLine) {
            if (line.includes('=')) {
                const split = line.split('=')
                const emoji = split[0].trim()

                reactembed.react(emoji)
            }
        }
    }
}