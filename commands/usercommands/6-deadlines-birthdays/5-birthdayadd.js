module.exports = {
    commands: ['addbirthday', 'bdadd', 'addbd', 'birthdayadd'],
    minArgs: 1,
    expectedArgs: '<!bdadd 28/08/2020>',

    callback: async (message, arguments, text) => {

        const bdSchema = require('@schemas/13-birthdayschema')

        message.delete()
        let date = arguments[0]
        const mention = message.author
        const UserID = mention.id
        var server = message.client.guilds.cache.get(serverID);

        console.log(`saving birthday: ${date}`)

        //defining user properties for inserting in database
        let result = await bdSchema.findOneAndUpdate(
            {
            UserID: `${UserID}`
            },
            {
                guild: `${server}`,
                date: `${date}`,
            },
            {
                upsert: true,
                new: true
            })

        message.reply(`Your birthday on the ${date} has been saved!`)
    }
}