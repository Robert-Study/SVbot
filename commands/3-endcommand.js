module.exports = {
    name: '3-endcommand',
    description: "!end command that ends the focus mode and study group",
    execute(message, args){
        const general = message.client.channels.cache.get('703937876634894388');
        if(message.member.roles.cache.has('735089477088837673')){
            message.channel.send('You are **locked in Focus mode** and cannot do that now!')
        
        }else{
        general.send(`<@${message.author.id}> you have left the *Focus Mode* and the *Study Group*!`)
        message.member.roles.remove('729706682308886548');
        message.member.roles.remove('729444698812579870');
        message.member.roles.add('707547622591692911');
        }
    }
}
