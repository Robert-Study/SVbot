const mongo = require('./mongo')
const Countchannelschema = require("./schemas/6-countchannelschema");

module.exports = (client) => {
    client.on('message', async (message) => {
        const { member, content, guild } = message
        if (message.author.bot) return;
        if (message.channel.id === "751498035699122196"){
            const number = content.toLowerCase() 
            if (isNaN(number)) {
                message.reply('you did not provide a number. Start counting at 1.')}
            else
                await mongo().then(async (mongoose) => {
                    try {
                    console.log('Searching the database for message-count')
            
                  const result = await Countchannelschema.findOne({
                    UserId: 'annon'
                  })
            
                  let messageCount = 0
          
                  if (result) {
                    messageCount = await result.messageCount
                    if (number != (result.messageCount +1)){
                        message.reply('that is the wrong number, Start counting at 1.')
                    } else {
                        console.log('Unexpected error')}

                return messageCount}
                    }finally {
                    mongoose.connection.close()
                }
                    })
                

                await mongo().then(async (mongoose) => {
                    try {
                      await Countchannelschema
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
          }
    })
}