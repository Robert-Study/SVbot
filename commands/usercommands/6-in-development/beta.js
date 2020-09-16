const Deadlineschema = require("@schemas/3-deadlineschema")

module.exports = {
    commands: ['betashowdl'],
    minArgs: 1,
    maxArgs: 1,


    callback: async (message, arguments, text) => {
        let date = arguments[0]
        let dlresults = await Deadlineschema.find({
            date: date
        })

        for (items of dlresults) {
            let User = items.UserID
            let deadline = items.dltext
            console.log(dltext)

            let reply = 'Deadlines today: \n\n'
            reply += `**${User}** deadline: *${deadline}*\n\n`
        
        message.channel.send('')
    }




}
}