module.exports = {
    commands: ['cl', 'clear'],
    minArgs: 1,
    maxArgs: 1,
    permissions: 'BAN_MEMBERS',
    callback: async (message, arguments, text) => {
        const amount = parseInt(arguments[0])
        if (isNaN(amount)) return message.reply('The amount parameter isn`t a number!'); 

        if (amount > 100) return message.reply('You can`t delete more than 100 messages at once!'); 
        if (amount < 1)  return message.reply('You have to delete at least 1 message!'); 

        await message.channel.messages.fetch({ limit: amount +1 }).then(messages => { 
            message.channel.bulkDelete(messages)}
        )}
}

