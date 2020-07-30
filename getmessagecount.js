const mongo = require('./mongo')
const messageCountSchema = require('./schemas/message-count-schema')

module.exports.getmessageCount = async (UserId) => {
    return await mongo().then(async (mongoose) => {
      try {
        console.log('Running findOne()')
  
        const result = await messageCountSchema.findOne({
          UserId,
        })
  
        let messageCount = 0

        if (result) {
          messageCount = result.messageCount
        } else {
          console.log('Inserting a document')
          await new messageCountSchema({
            UserId,
            messageCount,
          }).save()
        }
  
        return messageCount
      } finally {
        mongoose.connection.close()
      }
    })
  }