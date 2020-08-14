const mongo = require('./mongo')
const messageCountSchema = require('./schemas/1-messagecountschema')

module.exports = (client) => {
  client.on('message', async (message) => {
    if (message.author.bot) return;
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
};