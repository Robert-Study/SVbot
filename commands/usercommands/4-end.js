
module.exports = {
    commands: ['end'],
    minArgs: 0,
    maxArgs: 0,
    callback: (message, arguments, text) => {
        const general = message.client.channels.cache.get('703937876634894388');
        if(message.member.roles.cache.has('735089477088837673')){
            message.channel.send('You are **locked in Focus mode** and cannot do that now!')
        
        }else{
        general.send(`<@${message.author.id}> you have left the *Focus Mode* and the *Study Group*!`)
        message.member.roles.remove('729706682308886548');
        message.member.roles.remove('729444698812579870');
        message.member.roles.add('707547622591692911');

        const roleName = 'Verified'
        const role = message.guild.roles.cache.find((role) => role.name === roleName)

        if (!role) {
            return
        }

        let counter = 140

        message.guild.members.cache.forEach((member) => {
            if (member.roles.cache.has('707547622591692911')) {
             ++counter
            }
        })

        const channelVerified = '734767561824010390'
        const VerMembers = (guild) => {
            const verchannel = message.guild.channels.cache.get(channelVerified)
            verchannel.setName(`Verified Members: ${counter}`)
        }
        
        VerMembers(message.guild)
        updateMembers(message.guild)
        console.log(`${roleName} has ${counter} user(s)!`)
        }
    }
}

