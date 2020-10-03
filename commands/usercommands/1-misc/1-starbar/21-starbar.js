module.exports = {
    commands: ['starbar', 'bar'],
    minArgs: 0,
    maxArgs: 0,
    expectedArgs: '!starbar',

    callback: async (message, arguments, text) => {
        const starschema = require('@schemas/22-starbarschema')
        const {MessageAttachment} = require('discord.js')
        let server = '703937875720273972'
        const fs = require('fs')
        const path = require('path')

        const imagefive = fs.readFileSync(path.join(__dirname, 'image5.jpg'))
        const imagefour = fs.readFileSync(path.join(__dirname, 'image4.jpg'))
        const imagethree = fs.readFileSync(path.join(__dirname, 'image3.jpg'))
        const imagetwo = fs.readFileSync(path.join(__dirname, 'image2.jpg'))
        const imageone = fs.readFileSync(path.join(__dirname, 'image1.jpg'))

        let A = await starschema.findOne({
            GuildID: server,
            UserID: 'current'
        })

        if (A){
            let current = A.ticker

            if (current === 1){
                const attachment = new MessageAttachment(imageone)
                message.reply(`The current 🌟StarBar🌟 - **Level ${current}**\nclaim this level with !claim`, attachment)
            }
            if (current === 2){
                const attachment = new MessageAttachment(imagetwo)
                message.reply(`The current 🌟StarBar🌟 - **Level ${current}**\nclaim this level with !claim`, attachment)
            }
            if (current === 3){
                const attachment = new MessageAttachment(imagethree)
                message.reply(`The current 🌟StarBar🌟 - **Level ${current}**\nclaim this level with !claim`, attachment)
            }
            if (current === 4){
                const attachment = new MessageAttachment(imagefour)
                message.reply(`The current 🌟StarBar🌟 - **Level ${current}**\nclaim this level with !claim`, attachment)
            }
            if (current === 5){
                const attachment = new MessageAttachment(imagefive)
                message.reply(`The current 🌟StarBar🌟 - **Level ${current}**\nclaim this level with !claim`, attachment)
            }
        } 
    }
}