const { User } = require('discord.js')

module.exports = {
    commands: ['beta', 'addhabit'],
    minArgs: 0,
    expectedArgs: '<!dladd 28/08/2020 Exam on...>',

    callback: async (message, arguments, text) => {
        const forestSchema = require('@schemas/19-countschema')
        let server = '703937875720273972'

        let setup = await forestSchema.findOneAndUpdate(
            {
                GuildID: server,
                UserID: 'countgame'
            },
            {
                number: 0,
                wrong: 0,
                gameresq: 0,
                lastuser: 'empty'

            },
            {
                upsert: true,
                new: true
            }
        )

        let high = await forestSchema.findOneAndUpdate(
            {
                GuildID: server,
                UserID: 'highscore'
            },
            {
                number: 0,
                wrong: 0,
                gameresq: 0,
                lastuser: 'empty'

            },
            {
                upsert: true,
                new: true
            }
        )
    
    }
}