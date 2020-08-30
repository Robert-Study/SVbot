module.exports = {
    commands: ['embed'],
    minArgs: 1,
    permissions: 'BAN_MEMBERS',

    callback: (message, arguments, text) => {
        let dlEmbed = new Discord.MessageEmbed()
        .setColor('#337f4e')
        .setTitle(`${message.author.username} Added a deadline:`)
        .setTimestamp()
        .setFooter(`Deadline by: ${message.author.username} `)
        .addFields(
            { name: `${date}`, value: `${dltext}` })
        
        let reactapp = await deadlinechannel.send(dlEmbed);
            reactapp.react('🍀')
        }
} 