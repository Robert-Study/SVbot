const lockSchema = require('@schemas/14-lockdata')

module.exports = {
    commands: ['remaining'],
    minArgs: 0,
    maxArgs: 0,
    expectedArgs: '<!remaining>',

    callback: async (message, arguments, text) => {
        const ms = require('ms')
        var moment = require('moment');
        var schedule = require('node-schedule');
        const mention = message.author
        const UserId = mention.id

        let unlockresults = await lockSchema.find({
            UserID: UserId
        })

        if(unlockresults){
            for(items of unlockresults){
                let unlocktime = items.endtime
                let timeremaining = moment(`${unlocktime}`, "DD/MM/YYYY-hh:mm").fromNow()

                console.log(unlocktime)
                console.log(timeremaining)

                message.reply(`you are still locked until **${unlocktime} GMT-time**  which is approximately **${timeremaining}** from now`)
            }
        }
    }
}