
module.exports = {
    commands: ['info'],
    minArgs: 0,
    maxArgs: 0,
    callback: (message, arguments, text) => {
        message.channel.send('Help categories include: **!cmd**, **!forest**, **!VC**, **!infohydra**, **!infofocus**, **!team**, **!infobirthday**, **!infotimer**, **!infotodo**, **!helpticket**. Please type either one to get more info!.');
    }
}