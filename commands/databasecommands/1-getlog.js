module.exports = {
    commands: ['week', 'hours', 'treetime', 'time', 'tree'],
    minArgs: 0,
    maxArgs: 1,
    callback: async (message, arguments, text) => {
        const target = message.mentions.users.first() || message.author
        const targetId = target.id
        const logcounter = require('../../4-logcounter')
        const mongo = require('../../mongo')
        const userdataSchema = require('../../schemas/9-userinfoschema')
        const userdocumentSchema = require('../../schemas/2-logcountschema')
        const UserID = target.id

        const logtotal = await logcounter.getLog(UserID)

        await mongo().then(async (mongoose) => {

            console.log('Searching the database for Deadlines')

            const results = await userdataSchema.find({
                UserID: 'anon'
            })
            for (const time of results) {
                const totaltime = time.timeLog
                console.log(totaltime)
                const users = await userdocumentSchema.countDocuments({
                    barcode: 101,
                })
                console.log(users)
                let average = (totaltime / users)
                console.log(average)
                message.reply(`You have been planting trees for ${logtotal} hours with us this week, the total hours of the server is ${totaltime} by ${users} users! That makes an average of ${average}`)
                mongoose.connection.close()
            }

        })



        message.reply()
    }
};