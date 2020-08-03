
module.exports = {
    commands: ['cal'],
    minArgs: 0,
    maxArgs: 0,
    callback: (message, arguments, text) => {
        message.reply('a link to the Study Vibes calendar can be found here: https://tinyurl.com/yawqzozw');
    }
}