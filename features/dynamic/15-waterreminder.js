module.exports = (client) => {
    client.on('ready', async () => {
        var schedule = require('node-schedule');

        var j = schedule.scheduleJob('10 * * * *', async function () {
            const forestchannel = client.channels.cache.get('732292791287283862')
            const englishchannel = client.channels.cache.get('703937876634894388')

            forestchannel.send("Don't forget to stay hydrated! - Drink some water and take a break, stand up and move!")
            englishchannel.send("Don't forget to stay hydrated! - Drink some water and take a break, stand up and move!")
        }
        )
    })
}