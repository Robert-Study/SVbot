module.exports = {
    commands: ['anon', 'anonymous'],
    minArgs: 1,
    expectedArgs : '<!anon text>',

    callback: async(message, arguments, text) => {
        message.delete()
        const general = message.client.channels.cache.get('750264645662539816');
        general.send(text);
    }
}