module.exports = {
    commands: ['forecast', 'fc'],
    minArgs: 1,
    expectedArgs : '<!forecast location>',

    callback: async(message, arguments, text) => {
        const weather = require('weather-js');
        const discord = require('discord.js');
        weather.find({search: arguments.join(" "), degreeType: 'C'}, function(err, result) {
            try {
                console.log(`${result[0].location.name}`)
                let forec = result[0].forecast
                let reply = ''
                for (const forecast of forec) {
                    reply += `**${forecast.shortday}** it will be *${forecast.high} C∘* and **${forecast.skytextday}** with ${forecast.precip}% rain. \n\n`
                }
                console.log(`${reply}`)
            let embed = new discord.MessageEmbed()
            .setTitle(`Forecast - ${result[0].location.name}`)
            .setColor("#ff2050")
            .setDescription("Forecast might not be accurate.")
            .addField("Forecast", `${reply}`, true)
            
            message.channel.send(embed)
            } catch(err) {
              return message.channel.send("Unable To Get the data of Given location")
            }
            });   
                
              }
            }