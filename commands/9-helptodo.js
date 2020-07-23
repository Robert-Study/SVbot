module.exports = {
    name: '9-helptodo',
    description: "!code command that gives forest embed",
    execute(message, args){
        const Discord = require('discord.js');
        const todoembed = new Discord.MessageEmbed()
            .setColor('#337f4e')
            .addFields(
                { name: 'Set up your To-Do List:', value: ` 
                1). **$todo** (this will show your todo list)
                2). **$todo add** "what you want to add to list"
                3). **$todo remove** "number in the list you want to remove"
                4). **$todo clear** (this will remove your whole list)` }
                )
        message.channel.send(todoembed);
        }
}