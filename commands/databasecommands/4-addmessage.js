const economy = require('../../7-addmessage')

module.exports = {
  commands: ['addmsg'],
  minArgs: 2,
  maxArgs: 2,
  permissionError: 'You must be an administrator to use this command.',
  permissions: 'ADMINISTRATOR',
  
  callback: async (message, arguments) => {
    const mention = message.mentions.users.first()

    if (!mention) {
      message.reply('Please tag a user to add messages to.')
      return
    }

    const messageCount = arguments[1]
    if (isNaN(messageCount)) {
      message.reply('Please provide a valid numnber of messages.')
      return
    }

    const UserId = mention.id

    const newCoins = await economy.addMessage(UserId, messageCount)

    message.reply(
      `You have given <@${UserId}> ${messageCount} messages. They now have ${newCoins} messages in total!`
    )
  },
}