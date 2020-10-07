
module.exports = {
    commands: ['end', 'stop'],
    minArgs: 0,
    maxArgs: 0,
    callback: (message, arguments, text) => {
        //ending the focus or team role
        const general = message.client.channels.cache.get('703937876634894388');

        //if member is locked -> cannot do this
        if (message.member.roles.cache.has('735089477088837673')) {
            message.channel.send('You are **Locked in Focus**, I will not remove the focus role, but I removed the team you were part of. If you are stuck please write the command **!ticket** to get you in a Support Channel.')
            message.member.roles.remove('729444698812579870');
            message.member.roles.remove('758651778962292776');
            message.member.roles.remove('758651852337577994');
            message.member.roles.remove('758651692198920192');
            message.member.roles.remove('758651469841825813');

            // Study team 729444698812579870 Green 758651778962292776 Blue 758651852337577994 orange 758651692198920192 red 758651469841825813

        } else {
            //let member know they ended and remove focus+team, add verified
            general.send(`<@${message.author.id}> you have left the **Focus Mode** and the **Study Team**!`)
            message.member.roles.remove('729706682308886548');
            message.member.roles.remove('729444698812579870');
            message.member.roles.remove('758651778962292776');
            message.member.roles.remove('758651692198920192');
            message.member.roles.remove('758651469841825813');
            message.member.roles.remove('758651852337577994');
            message.member.roles.add('707547622591692911');

            //update the verified member counter
            const roleName = 'Verified'
            const role = message.guild.roles.cache.find((role) => role.name === roleName)

            if (!role) {
                return
            }

            let counter = 140

            //for each member that has the verified role increase the counter by one
            message.guild.members.cache.forEach((member) => {
                if (member.roles.cache.has('707547622591692911')) {
                    ++counter
                }
            })

            //define the voice channel to display the total verified members
            const channelVerified = '734767561824010390'
            const VerMembers = (guild) => {
                const verchannel = message.guild.channels.cache.get(channelVerified)
                verchannel.setName(`Verified Members: ${counter}`)
            }

            VerMembers(message.guild)
            console.log(`${roleName} has ${counter} user(s)!`)
        }
    }
}

