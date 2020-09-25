module.exports = {
    commands: ['showtimers'],
    minArgs: 0,
    maxArgs: 0,
    expectedArgs: '!showtimers',

    callback: async (message, arguments, text) => {
        
        const Discord = require('discord.js');
        const englishchannel = message.client.channels.cache.get('703937876634894388');
        const forestchannel = message.client.channels.cache.get('732292791287283862');

        const ms = require('ms')
        var moment = require('moment');
        var schedule = require('node-schedule');

        const teamtimerSchema = require("@schemas/18-teamtimerschema")
        const GuildID = "703937875720273972"

        let results = await teamtimerSchema.find({
            GuildID,

        })
        if (results) {
            let newsort = results.remaining
            let sortmyresults = results.reverse()
            console.log(sortmyresults)



            let reply = '**Team-Timers:** \n\n'
            for (const newresult of sortmyresults) {
                reply += `Team **${newresult.color}** - timer: *${newresult.remaining}* min. remaining`

                forestchannel.send(reply)
            }
        }
    }
}




