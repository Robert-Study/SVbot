module.exports = {
    commands: ['lock'],
    minArgs: 1,
    maxArgs: 1,
    expectedArgs = '<duration>',
    requiredRoles: ['Verified'],
    
    callback: async (message, arguments, text) => {
        const ms = require('ms')
        let role = message.guild.roles.cache.find(role => role.name === "Locked in Focus");  
        let focusrole = message.guild.roles.cache.find(role => role.name === "Focused");
        let verifiedrole = message.guild.roles.cache.find(role => role.name === "Verified");        
         
        if(!role) return message.reply("Couldn't find the lock role.")
        if(!focusrole) return message.reply("Couldn't find the focus role.")
        if(!verifiedrole) return message.reply("Couldn't find the verified role.")
         
            let time = arguments[0];
                    if(!time){
                        return message.reply("You didnt specify a time!");
                    }
         
                    message.member.roles.add(role.id);
                    message.member.roles.add(focusrole.id);
                    message.member.roles.remove(verifiedrole.id);
                    const focus = message.guild.channels.cache.get('730185814822223962');
                    const general = message.guild.channels.cache.get('703937876634894388');
                    focus.send(`${"<@" + message.author.id + ">"}, you have now been **Locked** in Focus for ${ms(ms(time))}`)
                    general.send(`Getting you locked up in there, good luck!`)

                    setTimeout(function(){
                        message.member.roles.remove(role.id);
                        message.member.roles.remove(focusrole.id);
                        message.member.roles.add(verifiedrole.id);
                        console.log(role.id)
                        general.send(`${"<@" + message.author.id + ">"}, you have now been unlocked`)
                    }, ms(time));
                }
        
    }
