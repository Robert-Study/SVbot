module.exports = {
    name: '7-log',
    description: "log command - Work in Progress!",
    execute(message, args){
        message.reply(` your ${args[0]} of study time have been logged.`);
    }
}