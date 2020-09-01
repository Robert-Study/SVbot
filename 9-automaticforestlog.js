const economy = require ('./4-logcounter')
const { MessageReaction } = require("discord.js");
const mongo = require('./mongo')
const logcountSchema = require('./schemas/2-logcountschema')
const logCache = {}

module.exports = (client) => {

    client.on("messageReactionAdd", async (reaction, user) => {
        if (reaction.message.partial) await reaction.message.fetch();
        if (reaction.partial) await reaction.fetch
    
        if (user.bot) return;
        if (reaction.emoji.name === '1️⃣'){
            const mention = user
            const timeLog = 1
            
         const UserID = mention.id
     
         const newLog = await economy.addLog(UserID, timeLog)
        }
    })

    client.on("messageReactionAdd", async (reaction, user) => {
        if (reaction.message.partial) await reaction.message.fetch();
        if (reaction.partial) await reaction.fetch
        
        if (user.bot) return;
        if (reaction.emoji.name === '2️⃣'){
            const mention = user
            const timeLog = 2
                
            const UserID = mention.id
         
            const newLog = await economy.addLog(UserID, timeLog)
        }
    })   
    
    client.on("messageReactionAdd", async (reaction, user) => {
        if (reaction.message.partial) await reaction.message.fetch();
        if (reaction.partial) await reaction.fetch
            
        if (user.bot) return;
        if (reaction.emoji.name === '3️⃣'){
            const mention = user
            const timeLog = 3
                    
            const UserID = mention.id
             
            const newLog = await economy.addLog(UserID, timeLog)
        }
    })  
}