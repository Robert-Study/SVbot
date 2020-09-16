module.exports = {
    commands: ['deny', 'denied'],
    minArgs: 1,
    permissions: 'BAN_MEMBERS',

    callback: async (message, arguments, text) => {
        const Discord = require('discord.js');
        const suggestdataSchema = require('@schemas/6-suggestdataschema')
        const suggestchannel = message.client.channels.cache.get('729372656456958022');
        const dltext = arguments.slice(1).join(" ")

        UserId = "annon"
        let suggestcount = arguments[0]

        console.log('Searching the database for Suggestions')

        const results = await suggestdataSchema.find({
            UserId,
            suggestcount,
        })
        if (results) {
            for (items of results) {
                let approvedsuggestion = items.suggestion

                console.log(approvedsuggestion)

                let suggestembed = new Discord.MessageEmbed()

                    .setColor('#cc1029')
                    .setTitle(`**Denied** suggestion #${arguments[0]}`)
                    .setTimestamp()
                    .addFields(
                        { name: `Suggestion:`, value: `${approvedsuggestion}` },
                        { name: "Reason from the mod that denied it:", value: `${dltext}` })

                suggestchannel.send(suggestembed);
            }
        } else { message.reply(`I could not find that suggestion, please check your message`) }
    }
}


