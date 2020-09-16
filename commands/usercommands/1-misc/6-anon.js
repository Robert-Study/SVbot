const annonCountSchema = require('@schemas/4-anoncountschema')

module.exports = {
  commands: ['anon', 'anonymous'],
  minArgs: 1,
  expectedArgs: '<!anon text>',

  callback: async (message, arguments, text) => {
    const thoughtschannel = message.client.channels.cache.get('746831486451187753');
    message.delete()

    // annoncountschema do get a numbered annonymous thought - add 1 for each ann message
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

    console.log('Searching the database for annon-count')

    //awaiting count to get the number for new annonimous message
    const result = await annonCountSchema.findOne({
      UserId: 'annon'
    })

    let messageCount = 0

    if (result) {
      messageCount = await result.messageCount
      
      //sending the message (text)
      thoughtschannel.send(`**Anonymous submission #${messageCount}** : \n${text}`);
    } else {
      console.log('Unexpected error')
    }

    return messageCount
  }

}
