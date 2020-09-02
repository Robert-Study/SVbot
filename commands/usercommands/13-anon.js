module.exports = {
    commands: ['anon', 'anonymous'],
    minArgs: 1,
    expectedArgs : '<!anon text>',

    callback: async(message, arguments, text) => {
        message.delete()
        const general = message.client.channels.cache.get('746831486451187753');
        general.send(text);
    }
}