module.exports = {
    commands: ['event'],
    minArgs: 0,
    maxArgs: 0,
    permissions: 'BAN_MEMBERS',

    callback: (message, arguments, text) => {
        const Discord = require('discord.js');
        const hydraembed = new Discord.MessageEmbed()
        .setColor('#1a9cd8')
        .addFields(
            { name: 'To-Do page update', value: `To all users of the to-do page, we have implemented the functions of the todo-bot of this page into our own SV-bot. To transition to the SV bot, we kindly ask you to use the following commands when setting up a to-do list: \n
            **!todo** : Shows your to-do list, will be empty for all new-users\n
            **!todoadd 'task' : Will add a task to your to-do list\n
            **!todoremove 'number' : Will remove the task with the number from the list\n
            **!todoclear : Will delete the entire list. \n\n
            The old To-do bot will get disabled once we have the feeling that most users have moved to the SV bot. If you need help, contact our team!`}
            )
    message.channel.send(hydraembed); 
    }
}