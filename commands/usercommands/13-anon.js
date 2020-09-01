module.exports = {
    commands: ['anon', 'anonymous'],
    minArgs: 1,
    expectedArgs : '<!anon text>',

    callback: async(message, arguments, text) => {
        message.delete()
        message.channel.send(text);
    }
}