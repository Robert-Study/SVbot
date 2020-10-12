const lockSchema = require('@schemas/14-lockdata')

module.exports = {
    commands: ['lock'],
    minArgs: 1,
    expectedArgs: '<!lock "time in Xm or Xh">',

    callback: async (message, arguments, text) => {
        const ms = require('ms')
        var moment = require('moment');
        var schedule = require('node-schedule');

        const { member, channel, content, guild } = message

        if (message.member.roles.cache.has('735089477088837673')) {
            message.reply('We all know what you are trying to do..')
        }

        else {
            const mention = message.author
            const UserId = mention.id
            let server = guild.id

            let time = arguments[0];
            let addtime = ms(`${arguments[0]}`)
            if (isNaN(addtime)) { message.reply('An error occured') }
            if (addtime < 120000) { message.reply(`you can't lock yourself for less than 2m`) }

            else {


                let startTime = new Date(Date.now());
                let endTime = new Date(startTime.getTime() + addtime);
                let structuretime = moment(endTime).format('DD/MM/YYYY-hh:mm')



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
                
                const general = message.guild.channels.cache.get('765171377447239700');
                general.send(`${"<@" + message.author.id + ">"}, you have now been **🔒 Locked 🔒** in Focus for ${ms(ms(time))}`)
                
            }
        }
    }
}