module.exports = {
    commands: ['dl', 'deadline'],
    minArgs: 1,
    expectedArgs : '<!dl 28/08/2020 Exam on...>',

    callback: async(message, arguments, text) => {
        message.delete()
        let date = arguments[0]
        const mention = message.author
        const UserID = mention.id
        let deadlinechannel = message.guild.channels.cache.get('717829409679343628');
        const Discord = require('discord.js');
        const dltext = arguments.slice(1).join(" ")
        const mongo = require('../../mongo')
        const userSchema = require('../../schemas/3-deadlineschema')
        console.log(dltext)
        
        const connectToMongoDB = async () => {
            await mongo().then(async (mongoose) => {
                try {
                    console.log('Connected to mongodb!')

                const user = {
                UserID: `${UserID}`,
                date: `${date}`,
                dltext: `${dltext}`,
                }
            await new userSchema(user).save()
            } finally {
                mongoose.connection.close()
                    }
            console.log(UserID)

        })
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
            connectToMongoDB()
        } 
}


