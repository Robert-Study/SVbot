const mongo = require('./mongo')
const Countchannelschema = require("./schemas/6-countchannelschema");

module.exports = (client) => {
    client.on('message', async (message) => {
        const { member, content, guild } = message
        if (message.author.bot) return;
        if (message.channel.id === "751498035699122196"){
            const number = content.toLowerCase() 
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
                        message.reply('that is the wrong number, I will start with 1, you can start counting at 2.')
                        message.channel.send('1')
                        await Countchannelschema
                        .findOneAndDelete(
                            {
                                UserId: 'annon',
                              }) 

                    } else if (number === (result.messageCount +1)){
                        console.log('correct number')
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
                    let newresult = await Countchannelschema.findOne({
                        UserId: 'annon',
                    })
                    if (newresult.messageCount != number){
                        await Countchannelschema
                        .findOneAndUpdate(
                            {
                                UserId: 'annon',
                              },
                              {
                            
                              messageCount: number,
                            },
                          
                          
                        )
                        .exec()
                    }
                    }
                }
                }finally {
                    mongoose.connection.close()
                }
                })
            }
    })
}
            