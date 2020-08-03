module.exports = {
    commands: ['stare'],
    minArgs: 1,
    maxArgs: 1,
    permissions: 'BAN_MEMBERS',

    callback: (message, arguments, text) => {
        var person = message.guild.member(message.mentions.users.first());
        message.channel.send(`<@${person.user.tag}>, a moderator is awkwardly staring at you.. 👀 
 
            Please behave according to the rules!`)
    }
}

