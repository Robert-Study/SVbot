const tododataSchema = require('@schemas/8-tododataschema')

module.exports = {
    commands: ['beta'],
    minArgs: 1,
    expectedArgs: '<!todo>',

    callback: async (message, arguments, text) => {
        const ms = require('ms')
        var moment = require('moment');
        var schedule = require('node-schedule');

        const { member, channel, content, guild } = message

        const mention = message.author
        const UserId = mention.id
        let server = guild.id

        let addtime = ms(`${arguments[0]}`)
        console.log(addtime)

        let startTime = new Date(Date.now());
        let endTime = new Date(startTime.getTime() + addtime);
        console.log(endTime)
    }
}