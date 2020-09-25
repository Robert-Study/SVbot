const { min } = require('moment');

module.exports = (client) => {

    client.on("messageReactionAdd", async (reaction, user) => {
        if (reaction.message.partial) await reaction.message.fetch();
        const ms = require('ms')
        var moment = require('moment');
        var schedule = require('node-schedule');
        if (reaction.partial) await reaction.fetch
        const forestSchema = require('@schemas/17-forestschema')
        const teamtimerSchema = require('@schemas/18-teamtimerschema')
        
        let UserID = user.id
        let server = '703937875720273972'
        let timerchannel = client.channels.cache.get('732292791287283862')


        if (user.bot) return;
        if (reaction.message.channel.id === "732292791287283862" || reaction.message.channel.id === "703937876634894388") {
            if (reaction.emoji.name === '⏰') {
                let authorcheck = await forestSchema.findOne({
                    number: UserID
                })
                console.log(authorcheck)
                console.log(UserID)

                if (authorcheck) {
                    let color = authorcheck.color
                    let time = authorcheck.time

                    let hourtime = `${time}h`;
                    let minutetime = (time * 60)
                    let minutems = `${minutetime}m`
                    let addtime = ms(`${minutems}`)
                    if (isNaN(addtime)) { return }
                    if (addtime < 120000) { return }

                    let startTime = new Date(Date.now());
                    let endTime = new Date(startTime.getTime() + addtime);
                    let structuretime = moment(endTime).format('DD/MM/YYYY-hh:mm')

                    let newtimer = await teamtimerSchema.findOneAndUpdate(
                        {
                            GuildID: server,
                            color: color
                        },
                        {
                            GuildID: server,
                            color: color,
                            endtime: structuretime,
                            remaining: minutetime
                        },
                        {
                            upsert: true,
                            new: true
                        })

                    if (color === 'red') {
                        let team = '758651469841825813'
                        timerchannel.send(`⏰ Timer of the  <@&758651469841825813> started - timer for **${minutetime}** minute(s)! ⏰`)
                    }
                    if (color === 'blue') {
                        let team = '758651852337577994'
                        timerchannel.send(`⏰ Timer of the  <@&758651852337577994> started - timer for **${minutetime}** minute(s)! ⏰`)
                    }
                    if (color === 'orange') {
                        let team = '758651692198920192'
                        timerchannel.send(`⏰ Timer of the  <@&758651692198920192> started - timer for **${minutetime}** minute(s)! ⏰`)
                    }
                    if (color === 'green') {
                        let team = '758651778962292776'
                        timerchannel.send(`⏰ Timer of the  <@&758651778962292776> started - timer for **${minutetime}** minute(s)! ⏰`)
                    }


                    console.log(newtimer)


                }
            }
        }
    })
}