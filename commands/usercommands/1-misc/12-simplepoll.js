module.exports = {
    commands: ['poll', 'simplepoll'],
    minArgs: 1,
    expectedArgs: '<!poll text>',

    callback: async (message, arguments, text) => {

        //creating reply with text and author
        let reply = (`**${message.author.username}** asks: ${text}`)

        //send reply and react to it with thumbs up/down
        let reactreply = await message.channel.send(reply);
        reactreply.react('👍')
        reactreply.react('👎')
        message.delete()
    }
}
