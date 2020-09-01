module.exports = {
    commands: ['health'],
    minArgs: 0,
    maxArgs: 0,
    callback: (message, arguments, text) => {
        message.channel.send('Hi! Are you looking for some **(mental) health advice**? Please consider these Discord Servers with professional help, \n\n**Nutrition and Health** https://discord.gg/Jpz5KN7 \n\n**Mental Health** https://discord.gg/HHAwFyY , https://discord.gg/WfrMsyG ');
    }
}