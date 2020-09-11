const mongo = require('../../mongo')
const Discord = require('discord.js');
const tododataSchema = require('../../schemas/8-tododataschema')
const todoCountSchema = require('../../schemas/7-todocountschema')


module.exports = {
    commands: ['todoremove', 'removetodo'],
    minArgs: 1,
    expectedArgs: '<!todoremove number>',

    callback: async (message, arguments, text) => {
        const mention = message.author
        const UserId = mention.id
        let todocount = arguments[0]
        let upserttasks = 
        

        await mongo().then(async (mongoose) => {
            await tododataSchema.deleteOne({
                UserId,
                todocount
            })
            message.reply(`Deleted task #${todocount}. To add new tasks use !todoadd`)
            await tododataSchema.findAndModify(
                
            )


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
        )
    }
}