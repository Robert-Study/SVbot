module.exports = {
    commands: ['infotodo','helptodo'],
    minArgs: 0,
    maxArgs: 0,
    callback: (message, arguments, text) => {
        const Discord = require('discord.js');
        const todoembed = new Discord.MessageEmbed()
            .setColor('#337f4e')
            .addFields(
                { name: 'Set up your To-Do List:', value: ` 
                1). **!todo** (this will show your todo list)
                2). **!todoadd** "what you want to add to list"
                3). **!todoremove 'number'** removes the number task from list
                4). **!todoclear** this will remove your whole list` }
                )
        message.channel.send(todoembed);
        }
}