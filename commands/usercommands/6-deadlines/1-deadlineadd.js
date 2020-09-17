module.exports = {
    commands: ['adddl', 'adddeadline', 'dladd', 'deadlineadd'],
    minArgs: 1,
    expectedArgs: '<!dladd 28/08/2020 Exam on...>',

    callback: async (message, arguments, text) => {
        let deadlinechannel = message.guild.channels.cache.get('717829409679343628');
        const userSchema = require('@schemas/3-deadlineschema')

        message.delete()
        let date = arguments[0]
        const mention = message.author
        const UserID = mention.id
        const Discord = require('discord.js');
        //slice the date from the text to gain only deadline text
        const dltext = arguments.slice(1).join(" ")
        
        console.log(`saving deadline: ${dltext}`)

        //defining user properties for inserting in database
        const user = {
            UserID: `${UserID}`,
            date: `${date}`,
            dltext: `${dltext}`,
        }
        await new userSchema(user).save()

        //response to user
        let dlEmbed = new Discord.MessageEmbed()
            .setColor('#337f4e')
            .setTitle(`${message.author.username} Added a deadline:`)
            .setTimestamp()
            .setFooter(`Deadline by: ${message.author.username} `)
            .addFields(
                { name: `${date}`, value: `${dltext}` })
        
        //reacting with four leave clover
        let reactdl = await deadlinechannel.send(dlEmbed);
        reactdl.react('🍀')
    }
}



