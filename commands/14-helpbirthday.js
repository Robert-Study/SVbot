module.exports = {
    name: '14-helpbirthday',
    description: "!code command that gives forest embed",
    execute(message, args){
        const Discord = require('discord.js');
        const focusembed = new Discord.MessageEmbed()
        .setColor('#337f4e')
        .addFields(
            { name: 'Set up your Birthday!', value: ` If you want to be added to the Birthday list and get mentioned on your birthday in the server (+birthday role) use: **bb.set day-month** (*example: bb.set 28-dec*). 
            *Note: use a 3 letter month code!*

            Use: **bb.remove** to remove yourself from the birthday list.` }
            )
    message.channel.send(focusembed);
    }
}
