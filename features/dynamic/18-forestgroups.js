
module.exports = (client) => {

    client.on("messageReactionAdd", async (reaction, user) => {
        if (reaction.message.partial) await reaction.message.fetch();
        if (reaction.partial) await reaction.fetch
        const forestSchema = require('@schemas/17-forestschema')
        const economy = require('@features/dynamic/4-logcounter')
        let UserID = user.id


        if (user.bot) return;
        if (reaction.message.channel.id === "732292791287283862" || reaction.message.channel.id === "703937876634894388") {
            if (reaction.emoji.name === '🔴') {
                await reaction.message.guild.members.cache.get(user.id).roles.add("758651469841825813")
                await reaction.message.guild.members.cache.get(user.id).roles.remove("758651778962292776")
                await reaction.message.guild.members.cache.get(user.id).roles.remove("758651692198920192")
                await reaction.message.guild.members.cache.get(user.id).roles.remove("758651852337577994")
                await reaction.message.guild.members.cache.get(user.id).roles.remove("729444698812579870")
                

                let result = await forestSchema.findOne({
                    color: 'red'
                })

                if (result) {
                    
                        let timeLog = result.time

                        const newLog = await economy.addLog(UserID, timeLog)
                    
                }

            }
            if (reaction.emoji.name === '🔵') {
                await reaction.message.guild.members.cache.get(user.id).roles.add("758651852337577994")
                await reaction.message.guild.members.cache.get(user.id).roles.remove("758651778962292776")
                await reaction.message.guild.members.cache.get(user.id).roles.remove("758651692198920192")
                await reaction.message.guild.members.cache.get(user.id).roles.remove("758651469841825813")
                await reaction.message.guild.members.cache.get(user.id).roles.remove("729444698812579870")
                

                let result = await forestSchema.findOne({
                    color: 'red'
                })

                if (result) {
                   
                        let timeLog = result.time

                        const newLog = await economy.addLog(UserID, timeLog)
                    
                }

            }
            if (reaction.emoji.name === '🟠') {
                await reaction.message.guild.members.cache.get(user.id).roles.add("758651692198920192")
                await reaction.message.guild.members.cache.get(user.id).roles.remove("758651778962292776")
                await reaction.message.guild.members.cache.get(user.id).roles.remove("758651469841825813")
                await reaction.message.guild.members.cache.get(user.id).roles.remove("758651852337577994")
                await reaction.message.guild.members.cache.get(user.id).roles.remove("729444698812579870")
               

                let result = await forestSchema.findOne({
                    color: 'red'
                })

                if (result) {
                    
                        let timeLog = result.time

                        const newLog = await economy.addLog(UserID, timeLog)
                    }
                
            }

            if (reaction.emoji.name === '🟢') {
                await reaction.message.guild.members.cache.get(user.id).roles.add("758651778962292776")
                await reaction.message.guild.members.cache.get(user.id).roles.remove("758651692198920192")
                await reaction.message.guild.members.cache.get(user.id).roles.remove("758651469841825813")
                await reaction.message.guild.members.cache.get(user.id).roles.remove("758651852337577994")
                await reaction.message.guild.members.cache.get(user.id).roles.remove("729444698812579870")

                let result = await forestSchema.findOne({
                    color: 'red'
                })

                if (result) {
                    
                        let timeLog = result.time

                        const newLog = await economy.addLog(UserID, timeLog)
                    
                }

            }
        }
    })
}