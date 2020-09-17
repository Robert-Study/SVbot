module.exports = {
    commands: ['addbirthday', 'bdadd', 'addbd', 'birthdayadd'],
    minArgs: 1,
    expectedArgs: '<!bdadd 28/08/2020>',

    callback: async (message, arguments, text) => {
        
        const bdSchema = require('@schemas/13-birthdayschema')

        message.delete()
        let date = arguments[0]
        const mention = message.author
        const UserID = mention.id
        const Discord = require('discord.js');
        let guild = 
        
        console.log(`saving birthday: ${date}`)

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