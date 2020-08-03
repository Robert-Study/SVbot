module.exports = {
    commands: ['fcslock'],
    minArgs: 2,
    maxArgs: 2,
    permissions: 'BAN_MEMBERS',

    callback: (message, arguments, text) => {
        var person  = message.guild.member(message.mentions.users.first());
        if(!person) return  message.reply("I CANT FIND THE USER " + person)

        let role = message.guild.roles.cache.find(role => role.name === "Locked in Focus");           

        if(!role) return message.reply("Couldn't find the lock role.")

        const ms = require ('ms')

        var time = (arguments[1]);
        if(!time){
            return message.reply("You didnt specify a time!");
        }

        person.roles.add(role.id)
        message.channel.send(`@${person.user.tag} has now been locked in Focus for ${ms(ms(time))}`)

        setTimeout(function(){
            person.roles.remove(role.id);
            console.log(role.id)
            message.channel.send(`@${person.user.tag} has been unlocked.`)
        }, ms(time));
    }
} 