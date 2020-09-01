module.exports = {
    commands: ['anon', 'anonymous'],
    minArgs: 1,
    expectedArgs : '<!anon text>',
    permissions: 'BAN_MEMBERS',

    callback: async(message, arguments, text) => {
        message.delete()
        message.channel.send(text);
    }
}