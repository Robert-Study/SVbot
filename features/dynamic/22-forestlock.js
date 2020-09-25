const { min } = require('moment');

module.exports = (client) => {

    client.on("messageReactionAdd", async (reaction, user) => {
        if (reaction.message.partial) await reaction.message.fetch();
        if (reaction.partial) await reaction.fetch
        
        const ms = require('ms')
        var moment = require('moment');

        if (reaction.partial) await reaction.fetch
        const forestSchema = require('@schemas/17-forestschema')
        const lockSchema = require('@schemas/14-lockdata')
        
        const msg = reaction.message;
        const guild = msg.guild;
        const guildMembers = guild.members;
        const guildMember = guildMembers.cache.get(user.id);


        let UserID = user.id
        let server = '703937875720273972'
        


        if (user.bot) return;
        if (reaction.message.channel.id === "732292791287283862" || reaction.message.channel.id === "703937876634894388") {
            if (reaction.emoji.name === '🔒') {

                if (guildMember.roles.cache.some((role) => role.name === 'Blue-Team')) {
                    blueresult = await forestSchema.findOne({
                        color: 'blue'
                    })

                    let locktime = blueresult.time
                    let minute = (locktime * 60)

                    const mention = user
                    const UserId = mention.id

                    let addtime = ms(`${minute}`)
                    let startTime = new Date(Date.now());
                    let endTime = new Date(startTime.getTime() + addtime);
                    let structuretime = moment(endTime).format('DD/MM/YYYY-hh:mm')

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

                    let role = reaction.guild.roles.cache.find(role => role.name === "Locked in Focus");
                    let focusrole = reaction.guild.roles.cache.find(role => role.name === "Focused");
                    let verifiedrole = reaction.guild.roles.cache.find(role => role.name === "Verified");

                    if (!role) return reaction.reply("Couldn't find the lock role.")
                    if (!focusrole) return reaction.reply("Couldn't find the focus role.")
                    if (!verifiedrole) return reaction.reply("Couldn't find the verified role.")

                    reaction.member.roles.add(role.id);
                    reaction.member.roles.add(focusrole.id);
                    reaction.member.roles.remove(verifiedrole.id);
                    const focus = reaction.guild.channels.cache.get('730185814822223962');
                    const general = reaction.guild.channels.cache.get('703937876634894388');
                    focus.send(`${"<@" + UserID + ">"}, you have now been **🔒 Locked 🔒** in Focus for ${ms(ms(time))}`)
                    general.send(`went into **🔒 lock for ${time} 🔒**, leave this person alone.`)
                }

                if (reaction.member.roles.cache.some((role) => role.name === 'Red-Team')) {
                    blueresult = await forestSchema.findOne({
                        color: red
                    })

                    let locktime = blueresult.time
                    let minute = (locktime * 60)

                    const mention = user
                    const UserId = mention.id

                    let addtime = ms(`${minute}`)
                    let startTime = new Date(Date.now());
                    let endTime = new Date(startTime.getTime() + addtime);
                    let structuretime = moment(endTime).format('DD/MM/YYYY-hh:mm')

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

                    let role = reaction.guild.roles.cache.find(role => role.name === "Locked in Focus");
                    let focusrole = reaction.guild.roles.cache.find(role => role.name === "Focused");
                    let verifiedrole = reaction.guild.roles.cache.find(role => role.name === "Verified");

                    if (!role) return reaction.reply("Couldn't find the lock role.")
                    if (!focusrole) return reaction.reply("Couldn't find the focus role.")
                    if (!verifiedrole) return reaction.reply("Couldn't find the verified role.")

                    reaction.member.roles.add(role.id);
                    reaction.member.roles.add(focusrole.id);
                    reaction.member.roles.remove(verifiedrole.id);
                    const focus = reaction.guild.channels.cache.get('730185814822223962');
                    const general = reaction.guild.channels.cache.get('703937876634894388');
                    focus.send(`${"<@" + UserID + ">"}, you have now been **🔒 Locked 🔒** in Focus for ${ms(ms(time))}`)
                    general.send(`went into **🔒 lock for ${time} 🔒**, leave this person alone.`)
                }
                if (reaction.member.roles.cache.some((role) => role.name === 'Green-Team')) {
                    blueresult = await forestSchema.findOne({
                        color: green
                    })

                    let locktime = blueresult.time
                    let minute = (locktime * 60)

                    const mention = user
                    const UserId = mention.id

                    let addtime = ms(`${minute}`)
                    let startTime = new Date(Date.now());
                    let endTime = new Date(startTime.getTime() + addtime);
                    let structuretime = moment(endTime).format('DD/MM/YYYY-hh:mm')

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

                    let role = reaction.guild.roles.cache.find(role => role.name === "Locked in Focus");
                    let focusrole = reaction.guild.roles.cache.find(role => role.name === "Focused");
                    let verifiedrole = reaction.guild.roles.cache.find(role => role.name === "Verified");

                    if (!role) return reaction.reply("Couldn't find the lock role.")
                    if (!focusrole) return reaction.reply("Couldn't find the focus role.")
                    if (!verifiedrole) return reaction.reply("Couldn't find the verified role.")

                    reaction.member.roles.add(role.id);
                    reaction.member.roles.add(focusrole.id);
                    reaction.member.roles.remove(verifiedrole.id);
                    const focus = reaction.guild.channels.cache.get('730185814822223962');
                    const general = reaction.guild.channels.cache.get('703937876634894388');
                    focus.send(`${"<@" + UserID + ">"}, you have now been **🔒 Locked 🔒** in Focus for ${ms(ms(time))}`)
                    general.send(`went into **🔒 lock for ${time} 🔒**, leave this person alone.`)
                }
                if (reaction.member.roles.cache.some((role) => role.name === 'Orange-Team')) {
                    blueresult = await forestSchema.findOne({
                        color: orange
                    })

                    let locktime = blueresult.time
                    let minute = (locktime * 60)

                    const mention = user
                    const UserId = mention.id

                    let addtime = ms(`${minute}`)
                    let startTime = new Date(Date.now());
                    let endTime = new Date(startTime.getTime() + addtime);
                    let structuretime = moment(endTime).format('DD/MM/YYYY-hh:mm')

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

                    let role = reaction.guild.roles.cache.find(role => role.name === "Locked in Focus");
                    let focusrole = reaction.guild.roles.cache.find(role => role.name === "Focused");
                    let verifiedrole = reaction.guild.roles.cache.find(role => role.name === "Verified");

                    if (!role) return reaction.reply("Couldn't find the lock role.")
                    if (!focusrole) return reaction.reply("Couldn't find the focus role.")
                    if (!verifiedrole) return reaction.reply("Couldn't find the verified role.")

                    reaction.member.roles.add(role.id);
                    reaction.member.roles.add(focusrole.id);
                    reaction.member.roles.remove(verifiedrole.id);
                    const focus = reaction.guild.channels.cache.get('730185814822223962');
                    const general = reaction.guild.channels.cache.get('703937876634894388');
                    focus.send(`${"<@" + UserID + ">"}, you have now been **🔒 Locked 🔒** in Focus for ${ms(ms(time))}`)
                    general.send(`went into **🔒 lock for ${time} 🔒**, leave this person alone.`)
                }
            }
        }
    })
}