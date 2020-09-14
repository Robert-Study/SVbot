module.exports = {
    commands: ['helpsubmission', 'helpsub', 'infosub'],
    minArgs: 0,
    maxArgs: 0,
    callback: (message, arguments, text) => {
        const Discord = require('discord.js');
        const vcembed = new Discord.MessageEmbed()
            .setColor('#337f4e')
            .addFields(
                { name: 'Submissions', value: 
                `How to make a submission in the Apps and Tips channels or set up an event in the Event channel:
                
                Start with the command **!sub** Follow the questions asked by the bot - You have 10 min to reply to all questions so make sure you have your app or study tip suggestion or event description ready!
                You can always stop the setup by replying with 'stop'. If you made your event you can use the command !event to post it in other channels as well.

                If you need help or have a question/feedback, use !ticket to make your personal support channel.` }
            )
    message.channel.send(vcembed);
        }
}