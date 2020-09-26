module.exports = {
    commands: ['helpdeadline', 'helpdl', 'infodl', 'infodeadline'],
    minArgs: 0,
    maxArgs: 0,
    callback: (message, arguments, text) => {
        const Discord = require('discord.js');
        const vcembed = new Discord.MessageEmbed()
            .setColor('#337f4e')
            .addFields(
                { name: 'Set up your Deadlines', value: ` 
                1). **!dl** (this will show your deadline list)
                2). **!dladd** "what you want to add to list"\n**IMPORTANT**: Make sure your dl starts with the date in the **DD/MM/YYYY** format (08/12/2020 - 8'th dec.)
                3). **!dlremove 'date'** removes the dated deadline from list\n**IMPORTANT**: Use !dlremove DD/MM/YYYY 
                4). **!dlclear** this will remove your whole list` }
                )
    message.channel.send(vcembed);
        }
}