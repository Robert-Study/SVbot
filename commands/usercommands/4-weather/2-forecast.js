module.exports = {
  commands: ['forecast', 'fc'],
  minArgs: 1,
  expectedArgs: '<!forecast location>',

  callback: async (message, arguments, text) => {
    const weather = require('weather-js');
    const discord = require('discord.js');
    weather.find({ search: arguments.join(" "), degreeType: 'C' }, function (err, result) {

      try {
        let forec = result[0].forecast
        let reply = ''
        //loop through the list obtained and add every day and weather to the reply
        for (const forecast of forec) {
          reply += `**${forecast.shortday}** it will be between *${forecast.low} - ${forecast.high} C∘* and **${forecast.skytextday}** with ${forecast.precip}% rain. \n\n`
        }

        //create the embed and send it to channel
        let forecastembed = new discord.MessageEmbed()
          .setTitle(`Forecast - ${result[0].location.name}`)

          .setDescription("Forecasts might not be accurate.")
          .addField("Forecast", `${reply}`, true)
          .setTimestamp()
          .setFooter(`Weather captain: ${message.author.username} `)
          .setThumbnail(result[0].current.imageUrl);

        message.channel.send(forecastembed)

      } catch (err) {
        return message.channel.send("Unable To Get the data of Given location")
      }
    });

  }
}