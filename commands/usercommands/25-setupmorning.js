module.exports = {
    commands: ['setupmorning', 'testsettup'],
    minArgs: 0,
    expectedArgs: '<!weather location>',

    callback: async (message, arguments, text) => {
        const mongo = require('../../mongo')
        const userdataSchema = require('../../schemas/9-userinfoschema')
        const mention = message.author
        const UserId = mention.id
        if (((arguments[1]) != `yes`) || ((arguments[1]) != `no`)) {
            message.reply('please provide a yes or no answer for Quotes')
        }
        else if ((arguments[2] != 'yes') || (arguments[2] != 'no')) {
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
                            place: arguments[0],
                            setQuote: arguments[1],
                            setForecast: arguments[2]
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

