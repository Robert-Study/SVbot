module.exports = {
    commands: ['betadelete'],
    minArgs: 1,
    maxArgs: 1,
    callback: async (message, arguments, text) => {

        const deadlineSchema = require('@schemas/3-deadlineschema')
        const target = message.mentions.users.first() || message.author
        const UserID = target.id
        let deleteddate = arguments[0]

        console.log('Connected to mongodb!')

        let todelete = await deadlineSchema.find({
            UserID,
            date: deleteddate
        })
        
        if (todelete) {
            await deadlineSchema.deleteOne({
                UserID,
                date: deleteddate
            })

            message.reply(`I have deleted your deadline on the ${deleteddate}`)
        }else message.reply('could not find your deadline, please check your command')
    }
}