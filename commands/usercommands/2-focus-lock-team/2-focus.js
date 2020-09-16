
module.exports = {
    commands: ['focus'],
    minArgs: 0,
    maxArgs: 0,
    callback: (message, arguments, text) => {
        //add member focus role and remove verified role
        message.reply(`went into Focus - don't disturb!`);
        const focus = message.client.channels.cache.get('730185814822223962');
        focus.send(`Welcome in **Focus** mode <@${message.author.id}> - to exit please use **!end**.`);
        message.member.roles.add('729706682308886548');
        message.member.roles.remove('707547622591692911');
    }
}