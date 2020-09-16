
module.exports = {
    commands: ['cal'],
    minArgs: 0,
    maxArgs: 0,
    callback: (message, arguments, text) => {
        //reply to message with link to calendar
        message.reply('a link to the Study Vibes calendar can be found here: https://tinyurl.com/yawqzozw');
    }
}