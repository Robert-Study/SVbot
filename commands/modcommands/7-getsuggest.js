const { count } = require('../../schemas/6-suggestdataschema');

module.exports = {
    commands: ['showsuggestions', 'showsuggest', 'suggestionlist', 'suggestions'],
    minArgs: 0,
    maxArgs: 0,
    permissions: 'BAN_MEMBERS',

    callback: async(message, arguments, text) => {
        const mongo = require('../../mongo')
        const suggestdataSchema = require('../../schemas/6-suggestdataschema')
        UserId = "annon"

        return await mongo().then(async (mongoose) => {
            try {
              console.log('Searching the database for Suggestions')
        
              const results = await suggestdataSchema.find({
                UserId,
              })
              console.log(results)
//
              const sortedsuggestions = results.sort(
                (a, b) => suggestcount[b] - sugggestcount[a])

                console.log(sortedsuggestions)
                sortedsuggestions.length = 5

              let reply = 'Here you go: \n\n'
                for (const result of sortedsuggestions) {
                    reply += `**${result.suggestcount}** deadline: *${result.suggestion}*\n\n`
                }

    
} finally {
    mongoose.connection.close()}

})
}
}