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

            const roundeddaily = Math.round(daily * 10) / 10
            const roundedweekly = Math.round(weekly * 10) / 10
            const roundedmonthly = Math.round(monthly * 10) / 10
            const roundedalltime = Math.round(alltime * 10) / 10

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



                message.channel.send(`**__Study time for ${target}__**\n\n**${roundeddaily}** hours today (*average: ${dailyround}*)\n**${roundedweekly}** hours this week (*average: ${weeklyround}*)\n**${roundedmonthly}** hours this month (*average: ${monthround}*)\n**${roundedalltime}** hours all-time (*average: ${allround}*)\n`)
            }
        }

    }
}
