const messageCountSchema = require('@schemas/12-messagecount')

module.exports = (client) => {
    client.on('message', async (message) => {
        const { author } = message
        const { id } = author

        const newmessage = await messageCountSchema.findOneAndUpdate(
            {
                UserId: id,
            },
            {
                $inc: {
                    messageCount: 1,
                },
            },
            {
                upsert: true,
                new: true,
            }
        )
            .exec()
    })
}

