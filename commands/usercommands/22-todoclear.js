const mongo = require('../../mongo')
const Discord = require('discord.js');
const tododataSchema = require('../../schemas/8-tododataschema')


module.exports = {
    commands: ['todoclear', 'cleartodo'],
    minArgs: 0,
    expectedArgs: '<!todoclear>',

    callback: async (message, arguments, text) => {
        const mention = message.author
        const UserId = mention.id

        await mongo().then(async (mongoose) => {
            await tododataSchema.deleteMany({
                UserId,
            })
            message.reply('Deleted all your tasks. To add new tasks use !todoadd')



            mongoose.connection.close()

        }
        )
    }
}




