const mongo = require('../../mongo')
const Discord = require('discord.js');
const tododataSchema = require('../../schemas/8-tododataschema')


module.exports = {
    commands: ['todo', 'todolist'],
    minArgs: 0,
    expectedArgs: '<!todo>',

    callback: async (message, arguments, text) => {
        const mention = message.author
        const UserId = mention.id

        await mongo().then(async (mongoose) => {
            const results = await tododataSchema.find({
                UserId,
            })
            console.log(results)
            if (results) {

                let sortmyresults = results.reverse()
                console.log(sortmyresults)
                let reply = '**Your To-do List:** \n\n'
                for (const newresult of sortmyresults) {
                    reply += `**${newresult.todocount})** *${newresult.todo}*\n`
                }
                message.channel.send(reply)
            }
            else { message.reply('You do not have any todos yet, to add tasks use !addtodo') }


            mongoose.connection.close()

        }
        )
    }
}





