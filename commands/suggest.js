module.exports = {
    name: 'suggest',
    description: "suggest command",
    execute(message, args){
        message.delete(1000);
        message.reply('a link to the Study Vibes calendar can be found here: https://tinyurl.com/yawqzozw');
    }
}