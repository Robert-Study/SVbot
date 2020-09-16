const tododataSchema = require('@schemas/8-tododataschema')
const todoCountSchema = require('@schemas/7-todocountschema')

module.exports = {
    commands: ['todoremove', 'removetodo'],
    minArgs: 1,
    expectedArgs: '<!todoremove number>',

    callback: async (message, arguments, text) => {
        const mention = message.author
        const UserId = mention.id
        let removecount = arguments[0]

        //find the User todo by number (todocount) in the dataschema and delete
        await tododataSchema.deleteOne({
            UserId,
            todocount: removecount,
        })
        message.reply(`Deleted task #${removecount}. To add new tasks use !todoadd`)
        
        //find all other tasks for this user
        let newtodo = await tododataSchema.find({
            UserId,
        })

        //if the task number is bigger than the deleted task number reduce it by 1
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

        //substract 1 from the todocountschema 
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