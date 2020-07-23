module.exports = {
    name: '5-focus',
    description: "!focus command that enables focus mode",
    execute(message, args){
        message.reply(`went into deep Focus Mode - don't disturb!`);
        const focus = message.client.channels.cache.get('730185814822223962');
        focus.send(`Welcome in **Focus Mode** <@${message.author.id}> - to exit please use **!end**.`);
        message.member.roles.add('729706682308886548');
        message.member.roles.remove('707547622591692911');
    }
}