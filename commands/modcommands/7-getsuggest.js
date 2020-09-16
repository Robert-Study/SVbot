
module.exports = {
  commands: ['showsuggestions', 'showsuggest', 'suggestionlist', 'suggestions'],
  minArgs: 0,
  maxArgs: 0,
  permissions: 'BAN_MEMBERS',

  callback: async (message, arguments, text) => {
    const suggestdataSchema = require('@schemas/6-suggestdataschema')
    UserId = "annon"

    console.log('Searching the database for Suggestions')

    const results = await suggestdataSchema.find({
      UserId,
    })
    console.log(results)

    let newsort = results.suggestcount
    let sortmyresults = results.reverse()
    console.log(sortmyresults)

    sortmyresults.length = 5

    let reply = '**The 5 most recent suggestions:** \n\n'
    for (const newresult of sortmyresults) {
      reply += `**${newresult.suggestcount}** suggestion: *${newresult.suggestion}*\n`
    }
    message.channel.send(reply)
  }
}