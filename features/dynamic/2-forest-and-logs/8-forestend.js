module.exports = (client) => {
    client.on('ready', async () => {
        
        const ms = require('ms')
        var moment = require('moment');
        var schedule = require('node-schedule');
        const teamtimerSchema = require('@schemas/18-teamtimerschema')
        let server = '703937875720273972'
        const timerchannel = client.channels.cache.get("732292791287283862")


        var j = schedule.scheduleJob('*/1 * * * *', async function () {
            let unlockresults = await teamtimerSchema.find({
                GuildID: server
            })

            if (unlockresults) {
                for (items of unlockresults) {
                    let unlocktime = items.endtime
                    let color = items.color

                    let currenttime = new Date(Date.now());
                    let current = moment(currenttime).format('DD/MM/YYYY-hh:mm')

                    if (unlocktime === current) {
                        if (color === 'red') {
                            let team = '758651469841825813'
                            let deletetimer = await teamtimerSchema.findOneAndUpdate({
                                GuildID: server, },{
                                color: 'deletethis'
                            })
                            timerchannel.send(`⏰ Timer of the  <@&758651469841825813> has finished! ⏰`)
                        }
                        if (color === 'blue') {
                            let deletetimer = await teamtimerSchema.findOneAndUpdate({
                                GuildID: server, },{
                                color: 'deletethis'
                            })
                            let team = '758651852337577994'
                            timerchannel.send(`⏰ Timer of the  <@&758651852337577994> has finished! ⏰`)
                        }
                        if (color === 'orange') {
                            let deletetimer = await teamtimerSchema.findOneAndUpdate({
                                GuildID: server, },{
                                color: 'delete'
                            })
                            let team = '758651692198920192'
                            timerchannel.send(`⏰ Timer of the  <@&758651692198920192> has finished! ⏰`)
                        }
                        if (color === 'green') {
                            let deletetimer = await teamtimerSchema.findOneAndUpdate({
                                GuildID: server, },{
                                color: 'deletethis'
                            })
                            let team = '758651778962292776'
                            timerchannel.send(`⏰ Timer of the  <@&758651778962292776> has finished! ⏰`)
                        }


                    }
                }
            }
        })
    })
}