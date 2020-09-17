const tododataSchema = require('@schemas/8-tododataschema')
const todoCountSchema = require('@schemas/7-todocountschema')

module.exports = {
    commands: ['todoclear', 'cleartodo'],
    minArgs: 0,
    expectedArgs: '<!todoclear>',

    callback: async (message, arguments, text) => {
        const mention = message.author
        const UserId = mention.id

        //search for all User entries in dataschema and delete
        await tododataSchema.deleteMany({
            UserId,
        })
        message.reply('Deleted all your tasks. To add new tasks use !todoadd')

        //set the todocount to 0 after deleting all todos
        await todoCountSchema.findOneAndUpdate({
            UserId,
        }, {
            UserId,
            messageCount: 0
        })
    }
}
