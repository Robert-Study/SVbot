module.exports = {
    commands: ['showdl', 'showdeadlines'],
    minArgs: 0,
    maxArgs: 1,
    callback: async(message, arguments, text) => {
        const mongo = require('../../mongo')
        const deadlineSchema = require('../../schemas/3-deadlineschema')
        const target = message.mentions.users.first() || message.author
        const UserID = target.id
        

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
            } finally {
              mongoose.connection.close()
              
            }
        })
    }
}