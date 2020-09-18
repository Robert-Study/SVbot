const lockSchema = require('@schemas/14-lockdata')

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

        let time = arguments[0];
        let addtime = ms(`${arguments[0]}`)
        if (isNaN(addtime)) { message.reply('An error occured') }

        else {
            console.log(addtime)

            let startTime = new Date(Date.now());
            let endTime = new Date(startTime.getTime() + addtime);
            let structuretime = moment(endTime).format('DD/MM/YYYY-hh:mm')

            console.log(endTime)
            console.log(structuretime)

            const user = {
                UserID: `${UserId}`,
                guild: `${server}`,
                starttime: `${startTime}`,
                endtime: `${structuretime}`
            }

            let result = await lockSchema.findOneAndUpdate(
                {
                    UserID: `${UserId}`
                },
                {
                    guild: `${server}`,
                    starttime: `${startTime}`,
                    endtime: `${structuretime}`
                },
                {
                    upsert: true,
                    new: true
                })

            let role = message.guild.roles.cache.find(role => role.name === "Locked in Focus");
            let focusrole = message.guild.roles.cache.find(role => role.name === "Focused");
            let verifiedrole = message.guild.roles.cache.find(role => role.name === "Verified");

            if (!role) return message.reply("Couldn't find the lock role.")
            if (!focusrole) return message.reply("Couldn't find the focus role.")
            if (!verifiedrole) return message.reply("Couldn't find the verified role.")

            message.member.roles.add(role.id);
            message.member.roles.add(focusrole.id);
            message.member.roles.remove(verifiedrole.id);
            const focus = message.guild.channels.cache.get('754042973850828821');
            const general = message.guild.channels.cache.get('754042973850828821');
            focus.send(`${"<@" + message.author.id + ">"}, you have now been **Locked** in Focus for ${ms(ms(time))}`)
            general.send(`Getting you locked up in there, good luck!`)
        }
    }
}