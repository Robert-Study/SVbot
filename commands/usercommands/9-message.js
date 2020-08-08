
module.exports = {
    commands: ['ann'],
    minArgs: 0,
    maxArgs: 0,
    callback: (message, arguments, text) => {
        message.channel.send('**Because there are so many problems with the !lock these days I have opened unlock open to anyone if needed. Use !lock @/YOUR OWN USERNAME.**' );
    }
}