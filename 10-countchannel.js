module.exports = (client) => {
    client.on('message', (message) => {
        const { member, content, guild } = message
        if (message.author.bot) return;
        if (message.channel.id === "751498035699122196"){
            const number = content.toLowerCase() 
            if (isNaN(number)) {
                message.reply('You did not provide a number. Start counting at 1.')}
          }
    })
}