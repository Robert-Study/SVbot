module.exports = {
  commands: ['showdl', 'showdeadlines', 'dl', 'deadline', 'deadlines'],
  minArgs: 0,
  maxArgs: 0,
  callback: async (message, arguments, text) => {
    return

    const deadlineSchema = require('@schemas/3-deadlineschema')
    const target = message.mentions.users.first() || message.author
    const UserID = target.id
    const Discord = require('discord.js');
    const channel = message.guild.channels.cache.get('717829409679343628');


    console.log('Searching the database for Deadlines')

    const results = await deadlineSchema.find({
      UserID,
    })

    let reply = 'Here you go: \n\n'
    for (const result of results) {
      reply += `**${result.date}** deadline: *${result.dltext}*\n\n`
    }


    const exampleEmbed = new Discord.MessageEmbed()
      .setColor('#337f4e')
      .setTitle(`${message.author.username} here are your deadlines:`)
      .addFields(
        { name: 'Your deadlines:', value: `${reply}` },
      )

    channel.send(exampleEmbed);
  }
}