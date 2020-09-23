
module.exports = {
    commands: ['beta'],
    minArgs: 0,
    maxArgs: 0,

    callback: async (message, arguments, text) => {
        const logcountuserschema = require("@schemas/1-logcountuser")
        let UserID = message.author
        let logUser = UserID.id
        let GuildID = "703937875720273972"

        let results = await logcountuserschema.findOneAndUpdate(
            {
                UserID: logUser,
                GuildID: GuildID
            },
            {
                $inc: {
                    daily: 1,
                    weekly: 1,
                    monthly: 1
                },
            },
            {
                upsert: true,
                new: true,
            }
        )
            .exec()
        console.log(results)
    }

}
