module.exports = {
    commands: ['helpdeadline', 'helpdl', 'infodl', 'infodeadline'],
    minArgs: 0,
    maxArgs: 0,
    callback: (message, arguments, text) => {
        const Discord = require('discord.js');
        const vcembed = new Discord.MessageEmbed()
            .setColor('#337f4e')
            .addFields(
                { name: 'Deadline and exams submission', value: 
                `How to register you deadline or exam date:
                
                Register your deadlines with the !dl command, followed by the date and the exam/deadline you are working towards 
                
                (**Example:** !dl 01/09/2020 Super secret project).
                To show all your deadlines use **!showdl** and to remove the first submitted one use **!deletedl**` }
            )
    message.channel.send(vcembed);
        }
}