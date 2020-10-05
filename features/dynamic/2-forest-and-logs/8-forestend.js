module.exports = (client) => {
    client.on('ready', async () => {

        const ms = require('ms')
        var moment = require('moment');
        var schedule = require('node-schedule');
        const teamtimerSchema = require('@schemas/18-teamtimerschema')
        let server = '703937875720273972'
        const timerchannel = client.channels.cache.get("732292791287283862")
        const redchannel = client.channels.cache.get("760809013494808606")
        const bluechannel = client.channels.cache.get("760808951242555392")
        const orangechannel = client.channels.cache.get("760809070549663755")
        const greenchannel = client.channels.cache.get("760808388467884042")
        //r 760809013494808606 b 760808951242555392 g 760809070549663755 O 760808388467884042

        const fs = require('fs')
        const path = require('path')
        const {MessageAttachment} = require('discord.js')

        
        const imagefour = fs.readFileSync(path.join(__dirname, 'timer4.jpg'))
        const imagethree = fs.readFileSync(path.join(__dirname, 'timer3.jpg'))
        const imagetwo = fs.readFileSync(path.join(__dirname, 'timer2.jpg'))
        const imageone = fs.readFileSync(path.join(__dirname, 'timer1.jpg'))


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
                                GuildID: server,
                                color: 'red'
                            }, {
                                color: 'deletethis'
                            })
                            timerchannel.send(`⏰ Timer of the  <@&758651469841825813> has finished! ⏰`)
                            const attachment = new MessageAttachment(imageone)
                            redchannel.send(`⏰ Timer of the  <@&758651469841825813> has finished! ⏰`, attachment)
                        }
                        if (color === 'blue') {
                            let deletetimer = await teamtimerSchema.findOneAndUpdate({
                                GuildID: server,
                                color: 'blue'
                            }, {
                                color: 'deletethis'
                            })
                            let team = '758651852337577994'
                            timerchannel.send(`⏰ Timer of the  <@&758651852337577994> has finished! ⏰`)
                            const attachment = new MessageAttachment(imagetwo)
                            bluechannel.send(`⏰ Timer of the  <@&758651852337577994> has finished! ⏰`, attachment)
                        }
                        if (color === 'orange') {
                            let deletetimer = await teamtimerSchema.findOneAndUpdate({
                                GuildID: server,
                                color: 'orange'
                            }, {
                                color: 'deletethis'
                            })
                            let team = '758651692198920192'
                            timerchannel.send(`⏰ Timer of the  <@&758651692198920192> has finished! ⏰`)
                            const attachment = new MessageAttachment(imagefour)
                            orangechannel.send(`⏰ Timer of the  <@&758651692198920192> has finished! ⏰`, attachment)
                        }
                        if (color === 'green') {
                            let deletetimer = await teamtimerSchema.findOneAndUpdate({
                                GuildID: server,
                                color: 'green'
                            }, {
                                color: 'deletethis'
                            })
                            let team = '758651778962292776'
                            timerchannel.send(`⏰ Timer of the  <@&758651778962292776> has finished! ⏰`)
                            const attachment = new MessageAttachment(imagethree)
                            greenchannel.send(`⏰ Timer of the  <@&758651778962292776> has finished! ⏰`, attachment)
                        }


                    }
                }
            }
        })
    })
}