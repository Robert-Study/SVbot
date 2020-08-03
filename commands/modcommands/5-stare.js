module.exports = {
    commands: ['stare'],
    minArgs: 1,
    maxArgs: 1,
    permissions: 'BAN_MEMBERS',

    callback: (message, arguments, text) => {
        message.delete()
        var person = message.guild.member(message.mentions.users.first());
            if (!person) return  message.reply("I CANT FIND THE USER " + person);
        message.channel.send(`${"<@" + person.user.tag + ">"}, a moderator is awkwardly staring at you.. 👀 
        Please behave according to the rules!`)
    }
}

