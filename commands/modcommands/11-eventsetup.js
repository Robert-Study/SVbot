module.exports = {
    commands: ['setevent'],
    minArgs: 0,
    maxArgs: 0,


    callback: (message, arguments, text) => {
        message.channel.send('What is the date of your event?').then(() => {
            message.channel.awaitMessages( { max: 1, time: 30000, errors: ['time'] })
                .then(collected => { let date = message.content }
                )
            if (date) {
                message.channel.send('What is the time of your event?').then(() => {
                    message.channel.awaitMessages( { max: 1, time: 30000, errors: ['time'] })
                        .then(collected => { let time = message.content 
                            console.log(`${date} and ${time}`)}

                        )

                })
            }
        })
    }
}
