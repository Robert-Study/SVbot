module.exports = {
    commands: ['cl'],
    minArgs: 1,
    maxArgs: 1,
    permissions: 'BAN_MEMBERS',
    callback: (message, arguments, text) => {
        let amount = arguments[1]
        if (isNaN(amount)) return 
            message.reply('The amount parameter isn`t a number!'); 

        if (amount > 100) return 
            messag.reply('You can`t delete more than 100 messages at once!'); 
        if (amount < 1) return 
            message.reply('You have to delete at least 1 message!'); 

        await message.channel.messages.fetch({ limit: amount }).then(messages => { 
            message.channel.bulkDelete(messages)}
        )}
}

