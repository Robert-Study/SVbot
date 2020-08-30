module.exports = {
    commands: ['showdl', 'showdeadlines'],
    minArgs: 0,
    maxArgs: 1,
    callback: async(message, arguments, text) => {
        const mongo = require('../../mongo')
        const deadlineSchema = require('../../schemas/3-deadlineschema')
        const target = message.mentions.users.first() || message.author
        const UserID = target.id
        const Discord = require('discord.js');
        const channel = message.guild.channels.cache.get('717829409679343628');

        return await mongo().then(async (mongoose) => {
            try {
              console.log('Searching the database for Deadlines')
        
              const results = await deadlineSchema.find({
                UserID,
              })
      
                let reply = ''
                for (const result of results) {
                    reply += `**${result.date}** deadline: *${result.dltext}*\n\n`
                }
                

                const exampleEmbed = new Discord.MessageEmbed()
                .setColor('#337f4e')
                .setTitle(`${message.author.username} here are your deadlines:`)
                .addFields(
                    { name: 'Your deadlines:', value: `${reply}` },
                    )
                  
                channel.send(exampleEmbed);

            } finally {
              mongoose.connection.close()

            }
        })
    }
}