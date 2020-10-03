module.exports = (client) => {
    client.on('ready', async () => {

        const ms = require('ms')
        var moment = require('moment');
        var schedule = require('node-schedule');
        const fs = require('fs')
        const path = require('path')

        const starschema = require('@schemas/22-starbarschema')
        let server = '703937875720273972'
        let botid = '733824756746420267'
        const gamechannel = client.channels.cache.get("759487772993126460")

        const imagefive = fs.readFileSync(path.join(__dirname, 'image5.jpg'))
        const imagefour = fs.readFileSync(path.join(__dirname, 'image4.jpg'))
        const imagethree = fs.readFileSync(path.join(__dirname, 'image3.jpg'))
        const imagetwo = fs.readFileSync(path.join(__dirname, 'image2.jpg'))
        const imageone = fs.readFileSync(path.join(__dirname, 'image1.jpg'))

        var j = schedule.scheduleJob('6 * * * *', async function () {
            let A = await starschema.findOne({
                GuildID: server,
                UserID: 'current'
            })

            if (A) {
                let current = A.ticker
                if (current === 1) {
                    const attachment = new MessageAttachment(imageone)
                    gamechannel.send(`Added one level to the StarBar! - **Level ${current}**\n, claim this level with !claim`, attachment)
                }
                if (current === 2) {
                    const attachment = new MessageAttachment(imagetwo)
                    gamechannel.send(`Added one level to the StarBar! - **Level ${current}**\n, claim this level with !claim`, attachment)
                }
                if (current === 3) {
                    const attachment = new MessageAttachment(imagethree)
                    gamechannel.send(`Added one level to the StarBar! - **Level ${current}**\n, claim this level with !claim`, attachment)
                }
                if (current === 4) {
                    const attachment = new MessageAttachment(imagefour)
                    gamechannel.send(`Added one level to the StarBar! - **Level ${current}**\n, claim this level with !claim`, attachment)
                }
                if (current === 5) {
                    const attachment = new MessageAttachment(imagefive)
                    gamechannel.send(`Added one level to the StarBar! - **Level ${current}**\n, claim this level with !claim`, attachment)
                }
            }
        })
    })
}