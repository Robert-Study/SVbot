module.exports = {
  commands: ['weather', 'wt'],
  minArgs: 1,
  expectedArgs: '<!weather location>',

  callback: async (message, arguments, text) => {
    const weather = require('weather-js');
    const discord = require('discord.js');
    weather.find({ search: arguments.join(" "), degreeType: 'C' }, function (err, result) {
      try {
        //reply is not used, should be used in the future fore cleaner embed
        let reply = `⛅️ Condition: **${result[0].current.skytext}** \n🌡 Temperature: **${result[0].current.temperature} C** \n 💨 Windspeed: **${result[0].current.winddisplay}** \n\n `

        let weatherembed = new discord.MessageEmbed()
          .setTitle(`Weather - ${result[0].location.name}`)
          .setDescription("Temperature units can may be differ some time")
          .addField("Temperature", `${result[0].current.temperature} Celcius`, true)
          .addField("Sky Text", result[0].current.skytext, true)
          .addField("Humidity", result[0].current.humidity, true)
          .addField("Wind Speed", result[0].current.windspeed, true)
          .addField("Observation Time", result[0].current.observationtime, true)
          .addField("Wind Display", result[0].current.winddisplay, true)
          .setTimestamp()
          .setFooter(`Weather captain: ${message.author.username} `)
          .setThumbnail(result[0].current.imageUrl);

        message.channel.send(weatherembed)
      } catch (err) {
        return message.channel.send("Unable To Get the data of Given location")
      }
    });
  }
}