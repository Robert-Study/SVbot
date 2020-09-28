module.exports = (client) => {

    client.on("message", async (message) => {
        return
        const messageCountSchema = require('@schemas/19-countschema')

        if(message.author.bot) return;

        if (message.channel.id === "751540126311645335") {

            let count = await messageCountSchema.findOne({
                UserID: 'countgame'
            })

            if (count) {
                for (items of count) {
                    let currentcount = items.number

                    let usercount = message.content
                    let addone = currentcount+1

                    if (isNaN(usercount) || usercount != (addone)) {

                    }
                    else { let newcount = await messageCountSchema.findOneAndUpdate({
                        UserID: 'countgame',
                        number: addone   
                    })

                    let userscore = await messageCountSchema.findOne({
                        UserID: 'highscore'
                    })

                    let highscore = await messageCountSchema.findOne({
                        UserID: 'highscore'
                    })

                    

                    for(results of highscore){
                        let highscore = results.number
                        if (highscore <= addone){
                            let newhighscore = await messageCountSchema.findOneAndUpdate({
                                UserID: 'highscore',
                                number: addone   
                            })
                        
                        }
                    }
                    }
                }
            }
        }
    })
}