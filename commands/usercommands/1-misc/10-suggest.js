const Discord = require('discord.js');
const suggestCountSchema = require('@schemas/5-suggestcountschema')
const suggestdataSchema = require('@schemas/6-suggestdataschema')

module.exports = {
  commands: ['suggest', 'suggestion', 'testsuggest'],
  minArgs: 1,
  expectedArgs: '<!suggest text>',

  callback: async (message, arguments, text) => {
    const suggestchannel = message.client.channels.cache.get('729372656456958022');
    
    //searching for the countschema of suggestions to get suggestion numbered
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

    console.log('Searching the database for suggestion-count')

    //awaiting schema and getting the new count
    const result = await suggestCountSchema.findOne({
      UserId: 'annon'
    })

    let messageCount = 0

    if (result) {
      messageCount = await result.messageCount

      //creating the embed for suggestion with the number fetched from messageCount
      let suggestembed = new Discord.MessageEmbed()
        .setColor('#337f4e')
        .setTitle(`❓Anonymous **#${messageCount}**`)
        .setTimestamp()
        .addFields(
          { name: `Suggestion:`, value: `${text}` })
      
      //send embed and react to it with up/down
      let reactsuggest = await suggestchannel.send(suggestembed);
      reactsuggest.react('⬆️')
      reactsuggest.react('⬇️')
      
      //saving the suggestion in suggestdataSchema to call again in listsuggestions
      let newsuggestion = text
      let upsuggestion = {
        UserId: 'annon',
        suggestcount: messageCount,
        suggestion: `${newsuggestion}`
      }

      await new suggestdataSchema(upsuggestion).save(function (err, doc) {
        if (err) return console.log(err);
        console.log("Suggestion-data inserted succussfully!");

      });
      message.delete()

    } else {
      console.log('Unexpected error')
    }
  }
}




