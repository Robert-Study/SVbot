const Deadlineschema = require("@schemas/3-deadlineschema")
var moment = require('moment');

module.exports = {
    commands: ['betashowdl'],
    minArgs: 0,
    maxArgs: 0,


    callback: async (message, arguments, text) => {
        let current = moment().format("DD/MM/YYYY")
        console.log(current)

        let dlresults = await Deadlineschema.find({
            date: current
        })
        console.log(dlresults)

        let reply = '**Deadlines today:** \n\n'

        for (items of dlresults) {
            let User = client.users.cache.get(items.UserID)
            let deadline = items.dltext
            console.log(deadline)

            reply += `**${User}** deadline: *${deadline}*\n\n`

            message.channel.send(reply)
        }
    }
}