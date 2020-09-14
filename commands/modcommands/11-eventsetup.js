module.exports = {
    commands: ['setevent'],
    minArgs: 0,
    maxArgs: 0,


    callback: (message, arguments, text) => {
        
        
        const filter = m => m.content.includes('!') && m.author.id === message.author.id

        message.channel.send("What is your age?").then(() => {
            message.channel.awaitMessages(filter, { max: 1, time: 30000, errors: ['time'] })
                .then( collected => {
                    const {channel, content, member} = message
                    const date = content
                    message.channel.send(`${collected.first().author} got the correct answer!${date}`);
                    console.log(date)
                })
                .catch(collected => {
                    message.channel.send('Looks like nobody got the answer this time.');
                });
        });
    }
}