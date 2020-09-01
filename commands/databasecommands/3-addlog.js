const economy = require ('../../4-logcounter')

module.exports = {
    commands: ['add', 'log'],
    minArgs: 1,
    maxArgs: 1,
    expectedArgs: "<Give study time in hours>",
    description: 'Gives a user coins.',
    callback: async (message, arguments) => {
      const mention = message.author
  
      if (!mention) {
        message.reply('Do you even exist.')
        return
      }
  
      const timeLog = arguments[0]
      if (isNaN(timeLog)) {
        message.reply('Please only provide the number of hours')
        return
      }

      const UserID = mention.id
  
      const newLog = await economy.addLog(UserID, timeLog)
  
      message.reply(
        `You have added ${timeLog} hours of study time. Your weekly study time is now ${newLog} hours!`
      )
    },
  }