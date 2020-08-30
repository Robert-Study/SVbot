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
        const channel = client.channels.cache.get('717829409679343628');

        return await mongo().then(async (mongoose) => {
            try {
              console.log('Searching the database for Deadlines')
        
              const results = await deadlineSchema.find({
                UserID,
              })
      
                let reply = '__Your deadlines:__\n\n'
                for (const result of results) {
                    reply += `**${result.date}** named *${result.dltext}*\n\n`
                }
                message.reply(reply)

                const exampleEmbed = new Discord.MessageEmbed()
                .setColor('#337f4e')
                .setTitle(`${message.author.username} Here are your deadlines:`)
                .addFields(
                    { name: 'Deadlines', value: `${reply}` },
                    )
                  
                channel.send(exampleEmbed)

            } finally {
              mongoose.connection.close()

            }
        })
    }
}