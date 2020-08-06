module.exports = {
    commands: ['stare', 'warn'],
    minArgs: 1,
    maxArgs: 1,
    permissions: 'BAN_MEMBERS',

    callback: (message, arguments, text) => {
        message.delete()
        var person = message.guild.member(message.mentions.users.first());
            if (!person) return  message.reply("I CANT FIND THE USER " + person);
        message.channel.send(`${"<@" + person.user.id + ">"}, a moderator is awkwardly staring at you.. 👀 
        **Please behave according to the rules!**`)
        const logchannel = message.guild.channels.cache.get('730029372697870347');
        logchannel.send(`${"<@" + person.user.id + ">"} has been warned by ${"<@" + message.author.id + ">"}`)
    }
}

