module.exports = (client) => {

    client.on("message", async (message) => {
        return
        const messageCountSchema = require('@schemas/4-anoncountschema')

        if(message.author.bot) return;

        if (message.channel.id === "751540126311645335") {

            let count = await messageCountSchema.findOne({
                UserId: 'countgame'
            })

            if (count) {
                for (items of count) {
                    let currentcount = items.messageCount
                    let usercount = message.content
                    let addone = currentcount+1

                    if (isNaN(usercount) || usercount === (addone)) {

                    }
                    else { let newcount = await messageCountSchema.findOneAndUpdate({
                        UserId: 'countgame',
                        messageCount: addone

                        
                    })

                    }
                }
            }
        }
    })
}