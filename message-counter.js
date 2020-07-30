const mongo = require('./mongo')
const messageCountSchema = require('./schemas/message-count-schema')

module.exports = (client) => {
  client.on('message', async (message) => {
    const { author } = message
    const { id } = author

    await mongo().then(async (mongoose) => {
      try {
        await messageCountSchema
          .findOneAndUpdate(
            {
              UserId: id,
            },
            {
              $inc: {
                messageCount: 1,
              },
            },
            {
              upsert: true,
            }
          )
          .exec()
      } finally {
        mongoose.connection.close()
      }
    })
  })
}

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