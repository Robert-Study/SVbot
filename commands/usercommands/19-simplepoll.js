module.exports = {
    commands: ['poll', 'simplepoll'],
    minArgs: 1,
    expectedArgs: '<!poll text>',

    callback: async (message, arguments, text) => {

        let exampleEmbed = (`**${message.author.username}** asks: ${text}`)

        let channelembed = await message.channel.send(exampleEmbed);
        channelembed.react('👍')
        channelembed.react('👎')

    }

}
