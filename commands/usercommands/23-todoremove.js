const mongo = require('../../mongo')
const Discord = require('discord.js');
const tododataSchema = require('../../schemas/8-tododataschema')
const todoCountSchema = require('../../schemas/7-todocountschema')


module.exports = {
    commands: ['betatodoremove', 'betaremovetodo'],
    minArgs: 1,
    expectedArgs: '<!todoremove number>',

    callback: async (message, arguments, text) => {
        const mention = message.author
        const UserId = mention.id
        let removecount = arguments[0]


        await mongo().then(async (mongoose) => {
            await tododataSchema.deleteOne({
                UserId,
                todocount: removecount,
            })
            message.reply(`Deleted task #${removecount}. To add new tasks use !todoadd`)
            let newtodo = await tododataSchema.find({
                UserId,
            })

            newtodo.forEach(item => {
                let i = item.todocount;
                for (i = removecount; i > removecount; i++) {
                    await tododataSchema.findOneAndUpdate({

                        todocount: i,
                    }, {

                        $inc: { todocount: -1 }


                    })
                }
            })



            await todoCountSchema
                .findOneAndUpdate(
                    {
                        UserId: UserId,
                    },
                    {
                        $inc: {
                            messageCount: -1,
                        },
                    },
                    {
                        upsert: true,
                    }
                )
                .exec()
            mongoose.connection.close()

        })

    }
}