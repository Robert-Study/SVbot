module.exports = {
    commands: ['starbar'],
    minArgs: 0,
    maxArgs: 0,
    expectedArgs: '!starbar',

    callback: async (message, arguments, text) => {
        const starschema = require('@schemas/22-starbarschema')
        let server = '703937875720273972'
        const mention = message.author
        const user = mention.id

        let A = await starschema.findOne({
            GuildID: server,
            UserID: 'current'
        })

        if (A) {
            let current = A.ticker
            let B = await starschema.findOneAndUpdate(
                {
                    GuildID: server,
                    UserID: user,
                },
                {
                    UserID: user,
                    number: current
                },
                {
                    upsert: true,
                    new: true,
                })

            let C = await starschema.findOneAndUpdate(
                {
                    GuildID: server,
                    UserID: 'current',
                },
                {
                    UserID: 'current',
                    ticker: 0
                },
                {
                    upsert: true,
                    new: true,
                })

            message.reply(`your StarBar level is now ${current} stars, try to rank as high as possible!`)
        }

    }
}