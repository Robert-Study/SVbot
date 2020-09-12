const mongo = require('../../mongo')
const Discord = require('discord.js');
const tododataSchema = require('../../schemas/8-tododataschema')
const todoCountSchema = require('../../schemas/7-todocountschema')


module.exports = {
    commands: ['betatodoclear', 'betacleartodo'],
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

            await todoCountSchema.findOneAndUpdate({
                UserId,
            },{
                UserId,
                messageCount: 0
            })
            mongoose.connection.close()

        }
        )
    }
}





