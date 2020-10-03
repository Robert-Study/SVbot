const { User } = require('discord.js')

module.exports = {
    commands: ['beta', 'addhabit'],
    minArgs: 0,
    expectedArgs: '<!dladd 28/08/2020 Exam on...>',

    callback: async (message, arguments, text) => {
        const forestSchema = require('@schemas/21-simonschema')
        let server = '703937875720273972'

        let setup = await forestSchema.findOneAndUpdate(
            {
                GuildID: server,
                UserID: 'gameset'
            },
            {
                number: 0,
                wrong: 0,
                time: "03/10/2020-08:30"

            },
            {
                upsert: true,
                new: true
            }
        )

       
    
    }
}