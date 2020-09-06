const mongo = require('../../mongo')
const Discord = require('discord.js');
const suggestCountSchema = require('../../schemas/5-suggestcountschema')
const suggestdataSchema = require('../../schemas/6-suggestdataschema')

module.exports = {
    commands: ['suggest', 'suggestion', 'testsuggest'],
    minArgs: 1,
    expectedArgs : '<!suggest text>',

    callback: async(message, arguments, text) => {
        message.delete()
        await mongo().then(async (mongoose) => {
            try {
              await suggestCountSchema
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
        })
        
        await mongo().then(async (mongoose) => {
          try {
            console.log('Searching the database for message-count')
      
            const result = await suggestCountSchema.findOne({
              UserId: 'annon'
            })
      
            let messageCount = 0
    
            if (result) {
              messageCount = await result.messageCount
              const suggestchannel = message.client.channels.cache.get('730029372697870347');
              let suggestembed = new Discord.MessageEmbed()
              .setColor('#337f4e')
              .setTitle(`❔Anonymous suggestion **#${messageCount}**`)
              .setTimestamp()
              .addFields(
                  { name: `${text}`, value: `\u200B` })
              
              let reactsuggest = await suggestchannel.send(suggestembed);
                  reactsuggest.react('⬆️')
                  reactsuggest.react('⬇️')
              
              let upsuggestion = {
                  UserId: 'annon',
                  suggestcount: messageCount,
                  suggestion: text
              }

            
            await new suggestdataSchema(upsuggestion).save(function(err, doc) {
              if (err) return console.error(err);
              console.log("Document inserted succussfully!");
            });
            console.log(`Suggestion saved: ${upsuggestion}`)
          }else {
              console.log('Unexpected error')}
            
            return messageCount
          } finally {
            mongoose.connection.close()
          }
      })        
  } 
}
        
//(node:4) UnhandledPromiseRejectionWarning: ObjectParameterError: Parameter "obj" to Document() must be an object, got {"UserId":"annon","suggestcount":34,"suggestion":"FX marks the spot"}
  //2020-09-06T21:32:50.228418+00:00 app[Worker.1]: Suggestion saved: [object Object]
