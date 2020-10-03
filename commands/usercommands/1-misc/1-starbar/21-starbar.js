module.exports = {
    commands: ['starbar'],
    minArgs: 0,
    maxArgs: 0,
    expectedArgs: '!starbar',

    callback: async (message, arguments, text) => {
        const {MessageAttachment} = require('discord.js')
        const fs = require('fs')
        const path = require('path')

        const image = fs.readFileSync(path.join(__dirname, 'image5.jpg'))

        
        const attachment = new MessageAttachment(image)

        message.reply('The current star-bar', attachment)
    }
}