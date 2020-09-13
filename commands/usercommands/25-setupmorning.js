const Todocountschema = require('../../schemas/7-todocountschema')
const Treecountschema = require('../../schemas/2-logcountschema')

module.exports = {
    commands: ['setmorning', 'testsettup'],
    minArgs: 0,
    expectedArgs: '<!weather location>',

    callback: async (message, arguments, text) => {
        const userdataSchema = require('../../schemas/9-userinfoschema')
        const mention = message.author
        const UserId = mention.id
        const UserID = mention.id
        let providedplace = arguments[0]
        let providedquote = arguments[1]
        let providedforecast = arguments[2]

        console.log(providedforecast)
        console.log(providedquote)

        if (providedquote == 'yes' || providedquote == 'no') {
            if ((providedforecast == 'yes') || (providedforecast == 'no')) {
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
                const locount = await logcountSchema.findOneAndUpdate(
                    {
                        UserID,
                    },
                    {
                        UserID,
                        barcode: 101,

                        timeLog,

                    },
                    {
                        upsert: true,
                        new: true,
                    }
                )


                const updatetodo = await Todocountschema.findOneAndUpdate(
                    {
                        UserId,
                    },
                    {
                        UserId,
                        messageCount
                    },

                    {
                        upsert: true,
                        new: true,
                    }
                )





                message.reply(' your morning setup has been arranged.')
            


        } else message.reply('Please give a yes or no answer to setquotes input')
    } else message.reply('Please give a yes or no answer to setforecast input')
}
}

