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
            results.forEach((result)=> {
                let sortsuggestcount = result.suggestcount
                console.log(sortsuggestcount)

                const sortedsuggestions = results.sort(
                (a, b) => sortsuggestcount[b] - sortsuggestcount[a])
                return sortedsuggestions
                })

                console.log(sortedsuggestions)
                sortedsuggestions.length = 5

              let reply = 'Here you go: \n\n'
                for (const newresult of sortedsuggestions) {
                    reply += `**${newresult.suggestcount}** deadline: *${newresult.suggestion}*\n\n`
                }
            message.channel.send(reply)
            
} finally {
    mongoose.connection.close()}

})
}
}