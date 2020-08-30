module.exports = {
    commands: ['dl', 'deadline'],
    minArgs: 1,
    expectedArgs : '<!dl 28/08/2020 Exam on...>',

    callback: async(message, arguments, text) => {
        message.delete()
        let date = arguments[0]
        let deadlinechannel = message.guild.channels.cache.get('717829409679343628');
        const Discord = require('discord.js');
        const dtext = arguments.split(/[ ]+/)
        let dltext = dtext.slice(1);
        
            let dlEmbed = new Discord.MessageEmbed()
            .setColor('#337f4e')
            .setTitle(`${message.author.username} Added deadline:`)
            .setTimestamp()
            .setFooter(`Deadline by: ${message.author.username} `)
            .addFields(
                { name: `${date}`, value: `${dltext}` })
            
            let reactapp = await deadlinechannel.send(dlEmbed);
                reactapp.react('🍀')
            }
}
