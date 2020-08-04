const mongo = require('./mongo')
const messageSchema = require('./schemas/1-messagecountschema')
const messageCache = {}

module.exports = (client) => {}

module.exports.addMessage = async (UserID, messageCount) => {
    return await mongo().then(async (mongoose) => {
      try {
        console.log('Running findOneAndUpdate()')
  
        const result = await messageSchema.findOneAndUpdate(
          {
            UserId,
          },
          {
            UserId,
            $inc: {
                messageCount,
            },
          },
          {
            upsert: true,
            new: true,
          }
        )
  
        messageCache[`${UserId}`] = result.messageCount
  
        return result.messageCount
      } finally {
        mongoose.connection.close()
      }
    })
  
}