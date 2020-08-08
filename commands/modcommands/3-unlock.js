module.exports = {
    commands: ['unlock'],
    minArgs: 1,
    maxArgs: 1,

    callback: (message, arguments, text) => {
        var person  = message.guild.member(message.mentions.users.first());
        if(!person) return  message.reply("I CANT FIND THE USER " + person)

        let lockrole = message.guild.roles.cache.find(role => role.name === "Locked in Focus");           
        let verifiedrole = message.guild.roles.cache.find(role => role.name === "Verified"); 
        let focusrole =  message.guild.roles.cache.find(role => role.name === "Focused");
        
        if(!lockrole) return message.reply("Couldn't find the lock role.")
        if(!verifiedrole) return message.reply("Couldn't find the lock role.")
        if(!focusrole) return message.reply("Couldn't find the lock role.")

        person.roles.add(verifiedrole.id)
        person.roles.remove(lockrole.id)
        person.roles.remove(focusrole.id)

        const general = message.client.channels.cache.get('703937876634894388');
        general.send(`<@${message.author.id}> has unlocked ${"<@" + person.user.id + ">"}, were you stuck or did you just leave your prison too early?`)
    }
}
