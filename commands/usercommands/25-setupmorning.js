module.exports = {
    commands: ['setupmorning', 'testsettup'],
    minArgs: 0,
    expectedArgs: '<!weather location>',

    callback: async (message, arguments, text) => {
        const mongo = require('../../mongo')
        const userdataSchema = require('../../schemas/9-userinfoschema')
        const mention = message.author
        const UserID = mention.id
        const user = {
            UserId: UserID,
            place: arguments[0],
            setQuote: arguments[1],
            setForecast: arguments[2],
        }
        await mongo().then(async (mongoose) => {
            try {

                await new userdataSchema(user).save()
            } finally {
                mongoose.connection.close()
                console.log(user)
            }
        })
    }
}

