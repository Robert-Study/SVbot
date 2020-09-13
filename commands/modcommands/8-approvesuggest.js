module.exports = {
    commands: ['approve'],
    minArgs: 1,
    permissions: 'BAN_MEMBERS',

    callback: async (message, arguments, text) => {

        const Discord = require('discord.js');
        const suggestdataSchema = require('../../schemas/6-suggestdataschema')
        const suggestchannel = message.client.channels.cache.get('730029372697870347');

        UserId = "annon"
        let suggestcount = arguments[0]


        console.log('Searching the database for Suggestions')

        const results = await suggestdataSchema.find({
            UserId,
            suggestcount,
        })

        console.log(results)

        if (results) {
            let suggestembed = new Discord.MessageEmbed()

                .setColor('#337f4e')
                .setTitle(`Approved suggestion #${arguments[0]}`)
                .setTimestamp()
                .addFields(
                    { name: `Suggestion:`, value: `${results.suggestion}` },
                    { name: "Reason from the mod that approved it:", value: `${text}` })

            suggestchannel.send(suggestembed);
        }
        else { message.reply(`I could not find that suggestion, please check your message`) }



    }
}

