module.exports = {
    commands: ['infotimer', 'helptimer'],
    minArgs: 0,
    maxArgs: 0,
    callback: (message, arguments, text) => {
        const Discord = require('discord.js');
        const focusembed = new Discord.MessageEmbed()
        .setColor('#337f4e')
        .addFields(
            { name: 'How to set session Timers:', value: ` If you want to set a timer or reminder for your session use the commands:
            
            **!timer**: Set a timer with a specific duration (example: !timer 60m Study, sets a timer for 60 min with the name study). :clock1: 
            **!remindme**: Same as the timer function above, but will @mention you when timer is finished.
            **!showtimers**: Shows all current timers :timer:  
            
            *Note: Session timers only work in the #timers-forest channel!*` }
            )
    message.channel.send(focusembed);
        }
}