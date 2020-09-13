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

        await tododataSchema.deleteOne({
            UserId,
            todocount: removecount,
        })
        message.reply(`Deleted task #${removecount}. To add new tasks use !todoadd`)
        let newtodo = await tododataSchema.find({
            UserId,
        })

        newtodo.forEach(async item => {
            let i = item.todocount;
            console.log(i)
            if (i > removecount) {
                await tododataSchema.findOneAndUpdate({
                    UserId,
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




    }
}