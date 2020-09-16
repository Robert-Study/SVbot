const Deadlineschema = require("@schemas/3-deadlineschema")

module.exports = {
    commands: ['betashowdl'],
    minArgs: 1,
    maxArgs: 1,


    callback: async (message, arguments, text) => {
        let update = arguments[0]
        let dlresults = await Deadlineschema.find({
            date: update
        })
        console.log(dlresults)

        for (items of dlresults) {
            let User = items.UserID
            let deadline = items.dltext
            console.log(deadline)

            let reply = 'Deadlines today: \n\n'
            reply += `**${User}** deadline: *${deadline}*\n\n`

            message.channel.send(reply)
        }
    }
}