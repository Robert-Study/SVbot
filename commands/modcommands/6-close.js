module.exports = {
    commands: ['close'],
    minArgs: 1,
    maxArgs: 1,
    permissions: 'BAN_MEMBERS',

    callback: (message, arguments, text) => {
        const categoryId = "703937876634894387";
        if (message.channel.parentID == categoryId) {
            message.channel.delete();
 
    } else {
        message.channel.send("This command only works in a support channel");
    }
}
}