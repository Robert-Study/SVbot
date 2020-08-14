module.exports = {
    commands: ['message', 'messages'],
    minArgs: 0,
    maxArgs: 1,
    callback: async(message, arguments, text) => {
        const mongo = require('../../mongo')
        const messageCountSchema = require('../../schemas/1-messagecountschema')
        const target = message.mentions.users.first() || message.author
        const UserId = target.id

        return await mongo().then(async (mongoose) => {
            try {
              console.log('Searching the database for message-count')
        
              const result = await messageCountSchema.findOne({
                UserId,
              })
        
              let messageCount = 0
      
              if (result) {
                messageCount = await result.messageCount
                message.reply(`you have already written ${messageCount} messages on this server!`)
              } else {
                console.log('No messages for this user')}
              
              return messageCount
            } finally {
              mongoose.connection.close()
              
            }
        })
    }
}