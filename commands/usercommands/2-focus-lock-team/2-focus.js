
module.exports = {
    commands: ['focus'],
    minArgs: 0,
    maxArgs: 0,
    callback: (message, arguments, text) => {
        //add member focus role and remove verified role
        
        const focus = message.client.channels.cache.get('765171377447239700');
        focus.send(`Welcome in **Focus** mode <@${message.author.id}> - to exit please use **!leavefocus**. To end both the team and the focus use **!end**.`);
        message.member.roles.add('729706682308886548');
        message.member.roles.remove('707547622591692911');
    }
}