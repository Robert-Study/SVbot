const mongo = require('../../mongo')
const Discord = require('discord.js');
const todoCountSchema = require('../../schemas/7-todocountschema')
const tododataSchema = require('../../schemas/8-tododataschema')


module.exports = {
    commands: ['todoadd', 'addtodo'],
    minArgs: 1,
    expectedArgs: '<!todoadd text>',

    callback: async (message, arguments, text) => {
        const mention = message.author
        const UserId = mention.id

        await mongo().then(async (mongoose) => {
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

            console.log('Searching the database for todo-count')

            const result = await todoCountSchema.findOne({
                UserId: UserId
            })

            let messageCount = 0

            if (result) {
                messageCount = await result.messageCount
                const todochannel = message.client.channels.cache.get('729372656456958022');
                let newtodo = text
                let uptodo = {
                    UserId: UserId,
                    todocount: messageCount,
                    todo: newtodo
                }
                await new tododataSchema(uptodo).save(function (err, doc) {
                    if (err) return console.log(err);
                    console.log("Document-todo inserted succussfully!");
                })


                const results = await tododataSchema.find({
                    UserId,
                })
                console.log(results)

                let sortmyresults = results
                console.log(sortmyresults)
                let reply = '**Your To-do List:** \n\n'
                for (const newresult of sortmyresults) {
                    reply += `**${newresult.todocount})** *${newresult.todo}*\n`
                }
                message.channel.send(reply)


                mongoose.connection.close()

            }
        })
    }
}





