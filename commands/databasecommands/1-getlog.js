module.exports = {
    commands: ['week', 'hours', 'treetime', 'time', 'tree'],
    minArgs: 0,
    maxArgs: 1,
    callback: async (message, arguments, text) => {
        const target = message.mentions.users.first() || message.author
        const targetId = target.id
        const logcounter = require('../../4-logcounter')
        const mongo = require('../../mongo')
        const userdataSchema = require('../../schemas/10-totalstudytimeschema')
        const userdocumentSchema = require('../../schemas/2-logcountschema')
        const UserID = target.id

        await mongo().then(async (mongoose) => {
            const logperson = await userdocumentSchema.find({
                UserID
            })
            for (person of logperson) {
                const personaltime = person.timeLog

                console.log('Searching the database for Deadlines')
                console.log(personaltime)
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
                    if (personaltime > average) {
                        message.reply(`You have been planting trees for ${personaltime} hours with us this week, the total hours of the server is ${totaltime} by ${users} users! That makes an average of ${average} hours per user. You are above average! Good job!`)
                        mongoose.connection.close()
                    } else if (personaltime < average) {
                        message.reply(`You have been planting trees for ${personaltime} hours with us this week, the total hours of the server is ${totaltime} by ${users} users! That makes an average of ${average} hours per user. You are under average but you can still do it!`)
                        mongoose.connection.close()
                    } else if (personaltime = average) {
                        message.reply(`You have been planting trees for ${personaltime} hours with us this week, the total hours of the server is ${totaltime} by ${users} users! That makes an average of ${average} hours per user. You are exactly on average, wow!`)
                        mongoose.connection.close()
                    }

                }
            }
        })
    }
}
