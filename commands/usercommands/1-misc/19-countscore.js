module.exports = {
    commands: ['countstats', 'score'],
    minArgs: 0,
    maxArgs: 0,
    expectedArgs: '!score',

    callback: async (message, arguments, text) => {
        const messageCountSchema = require('@schemas/19-countschema')
        let Guild = "703937875720273972"
        const mention = message.author
        const User = mention.id

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

            message.reply(`**__Here are your stats:__**\n⬆️You have counted in total: **${hs} numbers**\n⬇️You have wrongly counted **${wrong} times**\n#️⃣Percentage: **${averagescore}%**\n🧡You have earned **${resques} saves** for the server!\n\n📶Server Highscore: **${serverhigh}**\n💚Remaining saves: **${lifesremaining}** `)

        }else{message.reply('No results found for you yet!')}
    }
}
