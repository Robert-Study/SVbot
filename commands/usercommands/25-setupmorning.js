module.exports = {
    commands: ['setupmorning', 'testsettup'],
    minArgs: 0,
    expectedArgs: '<!weather location>',

    callback: async (message, arguments, text) => {
        const mongo = require('../../mongo')
        const userdataSchema = require('../../schemas/9-userinfoschema')
        const mention = message.author
        const UserId = mention.id
        let providedplace = arguments[0]
        let providedquote = arguments[1]
        let providedforecast = arguments[2] 

        console.log(providedforecast)
        console.log(providedquote)
        
        if ((providedquote != `yes`) || (providedquote != `no`)) {
            message.reply('please provide a yes or no answer for Quotes')
        }
        else if ((providedforecast != 'yes') || (providedforecast != 'no')) {
            message.reply('please provide a yes or no answer for forecast-info')
        }
        else {
            await mongo().then(async (mongoose) => {
                try {
                    console.log('Running findOneAndUpdate()')

                    const result = await userdataSchema.findOneAndUpdate(
                        {
                            UserId,
                        },
                        {
                            place: providedplace,
                            setQuote: providedquote,
                            setForecast: providedforecast
                        },

                        {
                            upsert: true,
                            new: true,
                        }
                    )
                } finally {
                    mongoose.connection.close()
                    message.reply(', your morning setup has been arranged.')
                }
            })

        }
    }
}

