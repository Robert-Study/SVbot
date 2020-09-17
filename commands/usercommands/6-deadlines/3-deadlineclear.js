const deadlineSchema = require('@schemas/3-deadlineschema')

module.exports = {
    commands: ['deadlineclear', 'cleardeadline', 'dlclear', 'cleardl'],
    minArgs: 0,
    expectedArgs: '<!dlclear>',

    callback: async (message, arguments, text) => {
        return
        const mention = message.author
        const UserId = mention.id

        //search for all User entries in deadlineschema and delete
        await deadlineSchema.deleteMany({
            UserId,
        })
        message.reply('Deleted all your deadlines. To add new deadlines use !dladd')
    }
}
