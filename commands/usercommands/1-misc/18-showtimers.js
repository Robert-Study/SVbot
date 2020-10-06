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

        for(items of results){
            let A = items.color
        
        if (A === 'red' || A === 'blue' || A === 'orange' || A === 'green') {
            let newsort = results.remaining

            let sortmyresults = results.reverse()
            console.log(sortmyresults)

            let reply = '**__⏳ Team-Timers: ⌛️__** \n'
            for (const newresult of sortmyresults) {

                if (newresult.remaining <= 0) {
                    await teamtimerSchema.deleteMany({
                        GuildID,
                        color: 'deletethis'
                    })
                } else {
                    reply += `Team **${newresult.color}** - timer: *${newresult.remaining}* min. remaining\n`
                }
            }
            message.channel.send(reply)
            break

        }


        }
    }
}



