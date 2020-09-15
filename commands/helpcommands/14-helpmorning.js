module.exports = {
    commands: ['helpmorning', 'helpdashboard', 'infomorning'],
    minArgs: 0,
    maxArgs: 0,
    callback: (message, arguments, text) => {
        const Discord = require('discord.js');
        const vcembed = new Discord.MessageEmbed()
            .setColor('#337f4e')
            .addFields(
                { name: 'Morning / Dashboard setup', value: 
                `How to set your personal dashboard with all the info you need before studying:
                
                Start with the command **!set**, follow the questions asked by the bot - You have 10 min to reply to all questions.
                You can always stop the setup by replying with 'stop'. If you finished your setup you can use **!morning** or **!dashboard** to display your personal dashboard.

                If you need help or have a question/feedback, use **!ticket** to make your personal support channel.` }
            )
    message.channel.send(vcembed);
        }
}