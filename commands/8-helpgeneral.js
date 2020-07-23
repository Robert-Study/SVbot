module.exports = {
    name: '8-helpgeneral',
    description: "?general-help command that provides help",
    execute(message, args){
        message.channel.send('Help categories include: **?cmd**, **?forest**, **?VC**, **?hydra**, **?focus**, **?team**, **?birthday**, **?timers**, **?todo**. Please type either one to get more info!.');
    }
}