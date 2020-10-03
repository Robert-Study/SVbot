module.exports = {
    commands: ['countstats', 'score'],
    minArgs: 0,
    maxArgs: 0,
    expectedArgs: '!score',

    callback: async (message, arguments, text) => {
        const messageCountSchema = require('@schemas/19-countschema')
        const simonSchema = require('@schemas/21-simonschema')
        let Guild = "703937875720273972"
        const mention = message.author
        const User = mention.id

        let C = await messageCountSchema.findOneAndUpdate(
            {
                GuildID: Guild,
                UserID: User,
            },
            {
                UserID: User,
                $inc: {
                    number: 0,
                    wrong: 0
                },
            },
            {
                upsert: true,
                new: true,
            })


        let D = await simonSchema.findOneAndUpdate(
            {
                GuildID: Guild,
                UserID: User,
            },
            {
                UserID: User,
                $inc: {
                    number: 0,
                    wrong: 0,
                    gameresc: 0
                },
            },
            {
                upsert: true,
                new: true,
            })

        let result = await messageCountSchema.findOne({
            UserID: User,
            GuildID: Guild
        })
        console.log(result)
        if (result) {
            console.log(result)
            let hs = result.number
            let wrong = result.wrong
            let resques = result.gameresc
            let averagescore = (100 - (wrong/hs*100))
            let averageround = Math.round(averagescore * 10) / 10

            let highscore = await messageCountSchema.findOne({
                UserID: 'highscore',
                GuildID: Guild
            })

            let serverhigh = highscore.number
            

            let countgame = await messageCountSchema.findOne({
                UserID: 'countgame',
                GuildID: Guild
            })

            let lifesremaining = countgame.gameresc

            let simongame = await simonSchema.findOne({
                UserID: User,
                GuildID: Guild
            })

            let simonnumber = simongame.number
            let simonwrong = simongame.wrong

            let totalgame = await simonSchema.findOne({
                UserID: 'gameset',
                GuildID: Guild
            })

            let totalsimon = totalgame.number
            let totalwrong = totalgame.wrong

            

            message.reply(`**__Here are your stats:__**\n⬆️ You have counted in total: **${hs} numbers**\n⬇️ You have wrongly counted **${wrong} times**\n#️⃣ Percentage: **${averageround}%**\n🧡 You have earned **${resques} saves** for the server!\n\n📶 Server Highscore: **${serverhigh}**\n💚 Remaining saves: **${lifesremaining}**\n\n🤔 Simon score: **${simonnumber}** (total: **${totalsimon}**)\n😨 Simon wrong: **${simonwrong}** (total: **${totalwrong}**) `)

        }else{message.reply('No results found for you yet!')}
    }
}
