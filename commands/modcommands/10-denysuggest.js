module.exports = {
    commands: ['deny', 'denied', 'denysuggestion'],
    minArgs: 1,
    permissions: 'BAN_MEMBERS',

    callback: async(message, arguments, text) => {
        const mongo = require('../../mongo')
        const Discord = require('discord.js');
        const suggestdataSchema = require('../../schemas/6-suggestdataschema')
        const suggestchannel = message.client.channels.cache.get('730029372697870347');
        UserId = "annon"
        let suggestcount = arguments[0]

        return await mongo().then(async (mongoose) => {
            try {
              console.log('Searching the database for Suggestions')
        
              const results = await suggestdataSchema.find({
                UserId,
                suggestcount,
              })
        console.log(results)

        let approvedsuggestion = {}
        if (results) {let apsuggestion = await results.suggestion
            
        let approvedsuggestion = JSON.stringify(apsuggestion)
        let suggestembed = new Discord.MessageEmbed()

        .setColor('#f4162c')
        .setTitle(`Denied suggestion #${arguments[0]}`)
        .setTimestamp()
        .addFields(
            { name: `Suggestion:`, value: `${approvedsuggestion}` },
            {name: "Reason from the mod that denied it:", value: `${text}`})
        
        suggestchannel.send(suggestembed);}
        else {message.reply(`I could not find that suggestion, please check your message`)}

            
    } finally {
        mongoose.connection.close()
    }
        })
    }
}
