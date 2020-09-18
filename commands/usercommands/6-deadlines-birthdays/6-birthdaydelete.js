module.exports = {
    commands: ['removebirthday', 'bdremove', 'removebd', 'birthdayremove'],
    minArgs: 0,
    expectedArgs: '<!bdremove>',

    callback: async (message, arguments, text) => {

        const bdSchema = require('@schemas/13-birthdayschema')

        message.delete()
        
        const mention = message.author
        const UserID = mention.id

        //defining user properties for inserting in database
        let result = await bdSchema.deleteOne(
            {
            UserID: `${UserID}`
            })

        message.reply(`Your birthday has been removed!`)
    }
}