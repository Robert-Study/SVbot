module.exports = (client) => {

    client.on("message", async (message) => {
        const { positiveFlags } = require('@JSON/positiveFlags.json');
        const { member, content, guild } = message
        const mention = message.author
        const author = mention.id
        const UserId = author

        if (message.author.bot) return;
        if (message.channel.id === "746831486451187753") return;

        for (var i = 0; i < positiveFlags.length; i++) {
            if (message.content.includes(positiveFlags[i])) {
                const warningcountSchema = require('@schemas/16-userstats')
                const messageCountSchema = require('@schemas/12-messagecount')

                const results = await warningcountSchema
                    .findOneAndUpdate(
                        {
                            UserID: mention,
                        },
                        {
                            $inc: {
                                positive: 1,
                                modwarnings: 0,
                                warnings: 0
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
    })
}






