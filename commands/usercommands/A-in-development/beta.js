const { User } = require('discord.js')

module.exports = {
    commands: ['beta', 'addhabit'],
    minArgs: 0,
    expectedArgs: '<!dladd 28/08/2020 Exam on...>',

    callback: async (message, arguments, text) => {
        const starschema = require('@schemas/22-starbarschema')
        let server = '703937875720273972'

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

       
    
    }
}