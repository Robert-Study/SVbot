
module.exports = (client) => {

    client.on("messageReactionAdd", async (reaction, user) => {
        if (reaction.message.partial) await reaction.message.fetch();
        if (reaction.partial) await reaction.fetch
        const forestSchema = require('@schemas/17-forestschema')
        const economy = require('@features/dynamic/4-logcounter')
        let UserID = user.id


        if (user.bot) return;
        if (reaction.message.channel.id === "755187097207308328" || reaction.message.channel.id === "755187097207308328") {
            if (reaction.emoji.name === '🔴') {
                await reaction.message.guild.members.cache.get(user.id).roles.add("756186590233231381")
                await reaction.message.guild.members.cache.get(user.id).roles.remove("756186590233231381")
                await reaction.message.guild.members.cache.get(user.id).roles.remove("756186590233231381")
                await reaction.message.guild.members.cache.get(user.id).roles.remove("756186590233231381")
                await reaction.message.guild.members.cache.get(user.id).roles.remove("756186590233231381")
                await reaction.message.guild.members.cache.get(user.id).roles.remove("756186590233231381")

                let result = await forestSchema.findOne({
                    color: 'red'
                })

                if (result) {
                    for (items of result) {
                        let timeLog = items.time

                        const newLog = await economy.addLog(UserID, timeLog)
                    }
                }

            }
            if (reaction.emoji.name === '🔵') {
                await reaction.message.guild.members.cache.get(user.id).roles.add("756186590233231381")
                await reaction.message.guild.members.cache.get(user.id).roles.remove("756186590233231381")
                await reaction.message.guild.members.cache.get(user.id).roles.remove("756186590233231381")
                await reaction.message.guild.members.cache.get(user.id).roles.remove("756186590233231381")
                await reaction.message.guild.members.cache.get(user.id).roles.remove("756186590233231381")
                await reaction.message.guild.members.cache.get(user.id).roles.remove("756186590233231381")

                let result = await forestSchema.findOne({
                    color: 'red'
                })

                if (result) {
                    for (items of result) {
                        let timeLog = items.time

                        const newLog = await economy.addLog(UserID, timeLog)
                    }
                }

            }
            if (reaction.emoji.name === '🟠') {
                await reaction.message.guild.members.cache.get(user.id).roles.add("756186590233231381")
                await reaction.message.guild.members.cache.get(user.id).roles.remove("756186590233231381")
                await reaction.message.guild.members.cache.get(user.id).roles.remove("756186590233231381")
                await reaction.message.guild.members.cache.get(user.id).roles.remove("756186590233231381")
                await reaction.message.guild.members.cache.get(user.id).roles.remove("756186590233231381")
                await reaction.message.guild.members.cache.get(user.id).roles.remove("756186590233231381")

                let result = await forestSchema.findOne({
                    color: 'red'
                })

                if (result) {
                    for (items of result) {
                        let timeLog = items.time

                        const newLog = await economy.addLog(UserID, timeLog)
                    }
                }
            }

            if (reaction.emoji.name === '🟢') {
                await reaction.message.guild.members.cache.get(user.id).roles.add("756186590233231381")
                await reaction.message.guild.members.cache.get(user.id).roles.remove("756186590233231381")
                await reaction.message.guild.members.cache.get(user.id).roles.remove("756186590233231381")
                await reaction.message.guild.members.cache.get(user.id).roles.remove("756186590233231381")
                await reaction.message.guild.members.cache.get(user.id).roles.remove("756186590233231381")
                await reaction.message.guild.members.cache.get(user.id).roles.remove("756186590233231381")

                let result = await forestSchema.findOne({
                    color: 'red'
                })

                if (result) {
                    for (items of result) {
                        let timeLog = items.time

                        const newLog = await economy.addLog(UserID, timeLog)
                    }
                }

            }
        }
    })
}