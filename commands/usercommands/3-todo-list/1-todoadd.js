const todoCountSchema = require('@schemas/7-todocountschema')
const tododataSchema = require('@schemas/8-tododataschema')

module.exports = {
    commands: ['todoadd', 'addtodo'],
    minArgs: 1,
    expectedArgs: '<!todoadd text>',

    callback: async (message, arguments, text) => {
        const mention = message.author
        const UserId = mention.id

        //count the number of entries for the given UserId
        await todoCountSchema
            .findOneAndUpdate(
                {
                    UserId: UserId,
                },
                {
                    $inc: {
                        messageCount: 1,
                    },
                },
                {
                    upsert: true,
                }
            )
            .exec()

        console.log('Searching the database for todo-counts')

        const result = await todoCountSchema.findOne({
            UserId: UserId
        })

        let messageCount = 0

        if (result) {
            let messageCount = await result.messageCount
            const todochannel = message.client.channels.cache.get('729372656456958022');

            //create the uptodo that inserts the data file in dataschema
            let newtodo = text
            let uptodo = {
                UserId: UserId,
                todocount: messageCount,
                todo: newtodo
            }

            //save the uptodo in the dataschema
            await new tododataSchema(uptodo).save(function (err, doc) {
                if (err) return console.log(err);
                console.log("Document-todo inserted succussfully!");
            })

            //reply to user with the added item
            let reply = `Added your item **${newtodo}** to your list`
            message.channel.send(reply)
        }
    }
}






