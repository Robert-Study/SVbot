module.exports = {
    commands: ['setevent'],
    minArgs: 0,
    maxArgs: 0,


    callback: (message, arguments, text) => {
        
        
        const filter = response => {response.content.toLowerCase()};

        message.channel.send("What is the date?").then(() => {
            message.channel.awaitMessages(filter, { max: 1, time: 30000, errors: ['time'] })
                .then(collected => {
                    message.channel.send(`${collected.first().author} got the correct answer!`);
                })
                .catch(collected => {
                    message.channel.send('Looks like nobody got the answer this time.');
                });
        });
    }
}