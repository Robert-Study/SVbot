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
                    let msminute = `${minute}m`

                    const mention = user
                    const UserId = mention.id

                    let addtime = ms(`${msminute}`)
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

                    
                    await reaction.message.guild.members.cache.get(user.id).roles.add("735089477088837673")
                    await reaction.message.guild.members.cache.get(user.id).roles.add("729706682308886548")
                    await reaction.message.guild.members.cache.get(user.id).roles.remove("707547622591692911")
                   
                    const focus = reaction.message.guild.channels.cache.get('730185814822223962');
                    const general = reaction.message.guild.channels.cache.get('703937876634894388');
                    focus.send(`${"<@" + UserID + ">"}, you have now been **🔒 Locked 🔒** in Focus for ${ms(ms(minute))} min.`)
                    general.send(`${"<@" + UserID + ">"} went into **🔒 lock for ${minute} min. 🔒**, leave this person alone.`)
                }
                if (guildMember.roles.cache.some((role) => role.name === 'Red-Team')) {
                    blueresult = await forestSchema.findOne({
                        color: 'red'
                    })

                    let locktime = blueresult.time
                    let minute = (locktime * 60)
                    let msminute = `${minute}m`

                    const mention = user
                    const UserId = mention.id

                    let addtime = ms(`${msminute}`)
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

                    
                    await reaction.message.guild.members.cache.get(user.id).roles.add("735089477088837673")
                    await reaction.message.guild.members.cache.get(user.id).roles.add("729706682308886548")
                    await reaction.message.guild.members.cache.get(user.id).roles.remove("707547622591692911")
                   
                    const focus = reaction.message.guild.channels.cache.get('730185814822223962');
                    const general = reaction.message.guild.channels.cache.get('703937876634894388');
                    focus.send(`${"<@" + UserID + ">"}, you have now been **🔒 Locked 🔒** in Focus for ${ms(ms(minute))} min.`)
                    general.send(`${"<@" + UserID + ">"} went into **🔒 lock for ${minute} min. 🔒**, leave this person alone.`)
                }
                if (guildMember.roles.cache.some((role) => role.name === 'Orange-Team')) {
                    blueresult = await forestSchema.findOne({
                        color: 'orange'
                    })

                    let locktime = blueresult.time
                    let minute = (locktime * 60)
                    let msminute = `${minute}m`

                    const mention = user
                    const UserId = mention.id

                    let addtime = ms(`${msminute}`)
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

                    
                    await reaction.message.guild.members.cache.get(user.id).roles.add("735089477088837673")
                    await reaction.message.guild.members.cache.get(user.id).roles.add("729706682308886548")
                    await reaction.message.guild.members.cache.get(user.id).roles.remove("707547622591692911")
                   
                    const focus = reaction.message.guild.channels.cache.get('730185814822223962');
                    const general = reaction.message.guild.channels.cache.get('703937876634894388');
                    focus.send(`${"<@" + UserID + ">"}, you have now been **🔒 Locked 🔒** in Focus for ${ms(ms(minute))} min.`)
                    general.send(`${"<@" + UserID + ">"} went into **🔒 lock for ${minute} min. 🔒**, leave this person alone.`)
                }
                if (guildMember.roles.cache.some((role) => role.name === 'Green-Team')) {
                    blueresult = await forestSchema.findOne({
                        color: 'green'
                    })

                    let locktime = blueresult.time
                    let minute = (locktime * 60)
                    let msminute = `${minute}m`

                    const mention = user
                    const UserId = mention.id

                    let addtime = ms(`${msminute}`)
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

                    
                    await reaction.message.guild.members.cache.get(user.id).roles.add("735089477088837673")
                    await reaction.message.guild.members.cache.get(user.id).roles.add("729706682308886548")
                    await reaction.message.guild.members.cache.get(user.id).roles.remove("707547622591692911")
                   
                    const focus = reaction.message.guild.channels.cache.get('730185814822223962');
                    const general = reaction.message.guild.channels.cache.get('703937876634894388');
                    focus.send(`${"<@" + UserID + ">"}, you have now been **🔒 Locked 🔒** in Focus for ${ms(ms(minute))} min.`)
                    general.send(`${"<@" + UserID + ">"} went into **🔒 lock for ${minute} min.🔒**, leave this person alone.`)
                }else{
                    const general = reaction.message.guild.channels.cache.get('703937876634894388');
                    general.send(`${"<@" + UserID + ">"} are you in one of the colored teams?`)}
            }
        }
    })
}

                