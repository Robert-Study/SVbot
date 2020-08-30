module.exports = {
    commands: ['helpsubmission', 'helpsub', 'infosub'],
    minArgs: 0,
    maxArgs: 0,
    callback: (message, arguments, text) => {
        const Discord = require('discord.js');
        const vcembed = new Discord.MessageEmbed()
            .setColor('#337f4e')
            .addFields(
                { name: 'Study Apps and Tips submission', value: 
                `How to make a submission in the Apps and Tips channels:
                
                Start with the command **!sub** followed by **#app** for the Apps-channel or **#tip** for the Tips-channel
                Write your app or tip suggestion in the same message as the above commands. The bot will take care of the rest and move your submissions in the appropriate channels!
                
                If you need help or have a question/feedback, use !ticket to make your personal support channel.` }
            )
    message.channel.send(vcembed);
        }
}