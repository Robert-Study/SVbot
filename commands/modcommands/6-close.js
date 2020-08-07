module.exports = {
    commands: ['close'],
    minArgs: 1,
    maxArgs: 1,
    permissions: 'BAN_MEMBERS',

    callback: (message, arguments, text) => {
        const categoryId = "703937876634894387";
        var person = message.guild.member(message.mentions.users.first());        
        if (message.channel.parentID == categoryId) {
            message.channel.delete();
            const logchannel = message.guild.channels.cache.get('730029372697870347');
            logchannel.send(`The support channel of ${"<@" + person.user.id + ">"} has been closed by ${"<@" + message.author.id + ">"}`)
 
    } else {
        message.channel.send("This command only works in a support channel");
    }
}
}
