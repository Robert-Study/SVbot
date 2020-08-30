module.exports = {
    commands: ['weather', 'wt'],
    minArgs: 1,
    expectedArgs : '<!weather location>',

    callback: async(message, arguments, text) => {
        const weather = require('weather-js');
        const discord = require('discord.js');
        weather.find({search: arguments.join(" "), degreeType: 'C'}, function(err, result) {
            try {
             
            let embed = new discord.MessageEmbed()
            .setTitle(`Weather - ${result[0].location.name}`)
            .setColor("#ff2050")
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

               message.channel.send(embed)
            } catch(err) {
              return message.channel.send("Unable To Get the data of Given location")
            }
            });   
                
              }
            }