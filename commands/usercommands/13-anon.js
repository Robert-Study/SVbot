const mongo = require('../../mongo')
const annonCountSchema = require('../../schemas/4-anoncountschema')

module.exports = {
    commands: ['anon', 'anonymous'],
    minArgs: 1,
    expectedArgs : '<!anon text>',

    callback: async(message, arguments, text) => {
        message.delete()
        await mongo().then(async (mongoose) => {
            try {
              await annonCountSchema
                .findOneAndUpdate(
                    {
                        UserId: 'annon',
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
        }
        )
        return await mongo().then(async (mongoose) => {
            try {
              console.log('Searching the database for message-count')
        
              const result = await annonCountSchema.findOne({
                UserId: 'annon'
              })
        
              let messageCount = 0
      
              if (result) {
                messageCount = await result.messageCount
                const general = message.client.channels.cache.get('746831486451187753');
                general.send(`**Anonymous #${messageCount}** : \n\n${text}`);
              } else {
                console.log('Unexpected error')}
              
              return messageCount
            } finally {
              mongoose.connection.close()
    
    
    }
})
}
}