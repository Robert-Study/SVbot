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

            message.reply(`You have counted in total: **${hs} numbers**\nYou have wrongly counted ${wrong}\n Percentage: ${averagescore}\nYou have earned ${resques} saves for the server!\n\nServer Highscore: ${serverhigh}\nRemaining saves: ${lifesremaining} `)

        }else{message.reply('No results found for you yet!')}
    }
}
