module.exports = (client) => {

  client.on("message", async (message) => {

    const { flaggedwords } = require('@JSON/flaggedwords.json');
    const { member, content, guild } = message
    const mention = message.author

    if (message.author.bot) return;
    if (message.channel.id === "746831486451187753") return;
    for (var i = 0; i < flaggedwords.length; i++) {
      if (message.content.includes(flaggedwords[i])) {
        message.delete()
        message.reply('your message was flagged for inappropriate content. A moderator will be here soon.')
        message.channel.send(`<@&707581746937462794> __Flagged message:__\n||${content}||`)
      }
      break;
    }
  })
}


