module.exports = {
    commands: ['beta', 'addhabit'],
    minArgs: 0,
    expectedArgs: '<!dladd 28/08/2020 Exam on...>',

    callback: async (message, arguments, text) => {
        const forestSchema = require('@schemas/17-forestschema')
        let server = '703937875720273972'

        let setup = await forestSchema.findOneAndUpdate(
            {
                GuildID: server
            },
            {
                color: 'red',
                taken: 0,

            },
            {
                upsert: true,
                new: true
            }
        )
    }
}