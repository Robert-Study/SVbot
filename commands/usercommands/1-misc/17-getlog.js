module.exports = {
    commands: ['week', 'hours', 'treetime', 'time', 'tree'],
    minArgs: 0,
    maxArgs: 1,
    callback: async (message, arguments, text) => {
        const target = message.mentions.users.first() || message.author
        const targetId = target.id
        const GuildID = "703937875720273972"


        const userdataSchema = require('@schemas/1-logcountuser')
        const userdocumentSchema = require('@schemas/1-logcountuser')
        const UserID = target.id


        const logperson = await userdocumentSchema.find({
            GuildID,
            UserID
        })
        for (person of logperson) {
            const daily = person.daily
            const weekly = person.weekly
            const monthly = person.monthly
            const alltime = person.alltime

            console.log('Searching the database for logs')
            console.log(daily)
            const results = await userdataSchema.find({
                GuildID,
                UserID: 'anon'
            })
            for (const time of results) {
                const alldaily = time.daily
                const allweekly = time.weekly
                const allmonthly = time.monthly
                const allalltime = time.alltime

                const users = await userdocumentSchema.countDocuments({
                    GuildID: GuildID
                })

                console.log(users)

                let averagedaily = (alldaily/users)
                let dailyround = Math.round(averagedaily * 10) / 10

                let averageweekly = (allweekly/users)
                let weeklyround = Math.round(averageweekly * 10) / 10

                let averagemonthly = (allmonthly/users)
                let monthround = Math.round(averagemonthly * 10) / 10

                let averageall = (allalltime/users)
                let allround = Math.round(averageall * 10) / 10



                message.channel.send(`**__Study time for ${target}__**\n\n**${daily}** hours today (*average: ${dailyround}*)\n**${weekly}** hours this week (*average: ${weeklyround}*)\n**${monthly}** hours this month (*average: ${monthround}*)\n**${alltime}** hours all-time (*average: ${allround}*)\n`)
            }
        }

    }
}
