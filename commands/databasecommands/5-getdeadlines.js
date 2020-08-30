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
        
              const result = await deadlineSchema.find({
                UserID,
              })
      
              if (result) {
                date = await result.date
                deadline = await result.dltext
                message.reply(`you have a deadline on the:
                \n **${date}** named: **${deadline}**`)
              } else {
                message.reply('No deadlines found for this user')}
              
            } finally {
              mongoose.connection.close()
              
            }
        })
    }
}