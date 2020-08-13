const { MessageReaction } = require("discord.js");

module.exports = (client) => {

client.on("messageReactionAdd", async (reaction, user) => {
    if (reaction.message.partial) await reaction.message.fetch();
    if (reaction.partial) await reaction.fetch

    if (user.bot) return;
    if (reaction.emoji.name === '👥'){
        await reaction.message.guild.members.cache.get(user.id).roles.add("729444698812579870")
    }
});

client.on("messageReactionAdd", async (reaction, user) => {
    if (reaction.message.partial) await reaction.message.fetch();
    if (reaction.partial) await reaction.fetch

    if (user.bot) return;
    if (reaction.message.channel.id !== "732631130133495889"){
    if (reaction.emoji.name === '🔇'){
        await reaction.message.guild.members.cache.get(user.id).roles.add("729706682308886548")
        await reaction.message.guild.members.cache.get(user.id).roles.remove("707547622591692911")
    }}
});

client.on("messageReactionAdd", async (reaction, user) => {
    if (reaction.message.partial) await reaction.message.fetch();
    if (reaction.partial) await reaction.fetch
    const welcomechannel = reaction.message.guild.channels.cache.get("707532591514910731")

    if (user.bot) return;
    if (reaction.message.channel.id === "707532591514910731"){
    if (reaction.emoji.name === '✅'){
        await reaction.message.guild.members.cache.get(user.id).roles.add("707547622591692911")
        await reaction.message.guild.members.cache.get(user.id).roles.remove("739920051208978495")
    }}
});

client.on("messageReactionAdd", async (reaction, user) => {
    if (reaction.message.partial) await reaction.message.fetch();
    if (reaction.partial) await reaction.fetch

    if (user.bot) return;
    if (reaction.message.channel.id === "732631130133495889"){
    if (reaction.emoji.name === '🔇'){
        await reaction.message.guild.members.cache.get(user.id).roles.add("709519094524936245")
        }else if (reaction.emoji.name === '🤖'){
            await reaction.message.guild.members.cache.get(user.id).roles.add("717822162244993064")
        }else if (reaction.emoji.name === '📚'){
            await reaction.message.guild.members.cache.get(user.id).roles.add("717675345918165014")
        }else if (reaction.emoji.name === '📖'){
            await reaction.message.guild.members.cache.get(user.id).roles.add("717675473152245800")
        }else if (reaction.emoji.name === '👨‍🏫'){
            await reaction.message.guild.members.cache.get(user.id).roles.add("732327573899575338")
    }}
});

client.on("messageReactionRemove", async (reaction, user) => {
    if (reaction.message.partial) await reaction.message.fetch();
    if (reaction.partial) await reaction.fetch

    if (user.bot) return;
    if (reaction.message.channel.id === "732631130133495889"){
    if (reaction.emoji.name === '🔇'){
        await reaction.message.guild.members.cache.get(user.id).roles.remove("709519094524936245")
        }else if (reaction.emoji.name === '🤖'){
            await reaction.message.guild.members.cache.get(user.id).roles.remove("717822162244993064")
        }else if (reaction.emoji.name === '📚'){
            await reaction.message.guild.members.cache.get(user.id).roles.remove("717675345918165014")
        }else if (reaction.emoji.name === '📖'){
            await reaction.message.guild.members.cache.get(user.id).roles.remove("717675473152245800")
        }else if (reaction.emoji.name === '👨‍🏫'){
            await reaction.message.guild.members.cache.get(user.id).roles.remove("732327573899575338")
    }}
});


}
