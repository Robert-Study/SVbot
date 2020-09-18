const { MessageReaction } = require("discord.js");

module.exports = (client) => {

    client.on("messageReactionAdd", async (reaction, user) => {
        if (reaction.message.partial) await reaction.message.fetch();
        if (reaction.partial) await reaction.fetch

        if (user.bot) return;
        if (reaction.emoji.name === '👥') {
            await reaction.message.guild.members.cache.get(user.id).roles.add("729444698812579870")
        }
    });

    client.on("messageReactionAdd", async (reaction, user) => {
        if (reaction.message.partial) await reaction.message.fetch();
        if (reaction.partial) await reaction.fetch

        if (user.bot) return;
        if (reaction.message.channel.id !== "732631130133495889") {
            if (reaction.emoji.name === '🔇') {
                await reaction.message.guild.members.cache.get(user.id).roles.add("729706682308886548")
                await reaction.message.guild.members.cache.get(user.id).roles.remove("707547622591692911")
            }
        }
    });

    client.on("messageReactionAdd", async (reaction, user) => {
        if (reaction.message.partial) await reaction.message.fetch();
        if (reaction.partial) await reaction.fetch
        const welcomechannel = reaction.message.guild.channels.cache.get("707532591514910731")

        if (user.bot) return;
        if (reaction.message.channel.id === "707532591514910731") {
            if (reaction.emoji.name === '✅') {
                await reaction.message.guild.members.cache.get(user.id).roles.add("707547622591692911")
                await reaction.message.guild.members.cache.get(user.id).roles.add("751090050573533215")
                await reaction.message.guild.members.cache.get(user.id).roles.add("751089899603493014")
                await reaction.message.guild.members.cache.get(user.id).roles.add("751089212463382538")
                await reaction.message.guild.members.cache.get(user.id).roles.remove("739920051208978495")
            }
        }
        if (reaction.message.channel.id === "756624745088155700") {
            if (reaction.emoji.name === '✅') {
                await reaction.message.guild.members.cache.get(user.id).roles.add("707547622591692911")
                await reaction.message.guild.members.cache.get(user.id).roles.add("751090050573533215")
                await reaction.message.guild.members.cache.get(user.id).roles.add("751089899603493014")
                await reaction.message.guild.members.cache.get(user.id).roles.add("751089212463382538")
                await reaction.message.guild.members.cache.get(user.id).roles.remove("739920051208978495")
            }
        }
    });

    client.on("messageReactionAdd", async (reaction, user) => {
        if (reaction.message.partial) await reaction.message.fetch();
        if (reaction.partial) await reaction.fetch

        if (user.bot) return;
        if (reaction.message.channel.id === "732631130133495889") {
            if (reaction.emoji.name === '🔇') {
                await reaction.message.guild.members.cache.get(user.id).roles.add("709519094524936245")
            } else if (reaction.emoji.name === '🤖') {
                await reaction.message.guild.members.cache.get(user.id).roles.add("717822162244993064")
            } else if (reaction.emoji.name === '📚') {
                await reaction.message.guild.members.cache.get(user.id).roles.add("717675345918165014")
            } else if (reaction.emoji.name === '📖') {
                await reaction.message.guild.members.cache.get(user.id).roles.add("717675473152245800")
            } else if (reaction.emoji.name === '👨‍🏫') {
                await reaction.message.guild.members.cache.get(user.id).roles.add("732327573899575338")
            } else if (reaction.emoji.name === '🏫') {
                await reaction.message.guild.members.cache.get(user.id).roles.add("750853349984829460")
            } else if (reaction.emoji.name === '👨‍💻') {
                await reaction.message.guild.members.cache.get(user.id).roles.add("750853181193322627")
            } else if (reaction.emoji.name === '🏛') {
                await reaction.message.guild.members.cache.get(user.id).roles.add("751095914583818381")
            } else if (reaction.emoji.name === '👨‍🎓') {
                await reaction.message.guild.members.cache.get(user.id).roles.add("750853030303498263")
            } else if (reaction.emoji.name === '💼') {
                await reaction.message.guild.members.cache.get(user.id).roles.add("750853283576414290")
            } else if (reaction.emoji.name === '🌺') {
                await reaction.message.guild.members.cache.get(user.id).roles.add("751085843443089519")
            } else if (reaction.emoji.name === '🌳') {
                await reaction.message.guild.members.cache.get(user.id).roles.add("751085980663939093")
            } else if (reaction.emoji.name === '🌴') {
                await reaction.message.guild.members.cache.get(user.id).roles.add("751086099580977287")
            } else if (reaction.emoji.name === '♂️') {
                await reaction.message.guild.members.cache.get(user.id).roles.add("751415673611223170")
                await reaction.message.guild.members.cache.get(user.id).roles.add("751090050573533215")
                await reaction.message.guild.members.cache.get(user.id).roles.add("751089899603493014")
                await reaction.message.guild.members.cache.get(user.id).roles.add("751089212463382538")
            } else if (reaction.emoji.name === '♀️') {
                await reaction.message.guild.members.cache.get(user.id).roles.add("751415779504685146")
                await reaction.message.guild.members.cache.get(user.id).roles.add("751090050573533215")
                await reaction.message.guild.members.cache.get(user.id).roles.add("751089899603493014")
                await reaction.message.guild.members.cache.get(user.id).roles.add("751089212463382538")
            } else if (reaction.emoji.name === '😄') {
                await reaction.message.guild.members.cache.get(user.id).roles.add("751415880730148975")
                await reaction.message.guild.members.cache.get(user.id).roles.add("751090050573533215")
                await reaction.message.guild.members.cache.get(user.id).roles.add("751089899603493014")
                await reaction.message.guild.members.cache.get(user.id).roles.add("751089212463382538")
            }
        }
    });

    client.on("messageReactionRemove", async (reaction, user) => {
        if (reaction.message.partial) await reaction.message.fetch();
        if (reaction.partial) await reaction.fetch

        if (user.bot) return;
        if (reaction.message.channel.id === "732631130133495889") {
            if (reaction.emoji.name === '🔇') {
                await reaction.message.guild.members.cache.get(user.id).roles.remove("709519094524936245")
            } else if (reaction.emoji.name === '🤖') {
                await reaction.message.guild.members.cache.get(user.id).roles.remove("717822162244993064")
            } else if (reaction.emoji.name === '📚') {
                await reaction.message.guild.members.cache.get(user.id).roles.remove("717675345918165014")
            } else if (reaction.emoji.name === '📖') {
                await reaction.message.guild.members.cache.get(user.id).roles.remove("717675473152245800")
            } else if (reaction.emoji.name === '👨‍🏫') {
                await reaction.message.guild.members.cache.get(user.id).roles.remove("732327573899575338")
            } else if (reaction.emoji.name === '🏫') {
                await reaction.message.guild.members.cache.get(user.id).roles.remove("750853349984829460")
            } else if (reaction.emoji.name === '👨‍💻') {
                await reaction.message.guild.members.cache.get(user.id).roles.remove("750853181193322627")
            } else if (reaction.emoji.name === '🏛') {
                await reaction.message.guild.members.cache.get(user.id).roles.remove("751095914583818381")
            } else if (reaction.emoji.name === '👨‍🎓') {
                await reaction.message.guild.members.cache.get(user.id).roles.remove("750853030303498263")
            } else if (reaction.emoji.name === '💼') {
                await reaction.message.guild.members.cache.get(user.id).roles.remove("750853283576414290")
            } else if (reaction.emoji.name === '🌺') {
                await reaction.message.guild.members.cache.get(user.id).roles.remove("751085843443089519")
            } else if (reaction.emoji.name === '🌳') {
                await reaction.message.guild.members.cache.get(user.id).roles.remove("751085980663939093")
            } else if (reaction.emoji.name === '🌴') {
                await reaction.message.guild.members.cache.get(user.id).roles.remove("751086099580977287")
            } else if (reaction.emoji.name === '♂️') {
                await reaction.message.guild.members.cache.get(user.id).roles.remove("751415673611223170")
            } else if (reaction.emoji.name === '♀️') {
                await reaction.message.guild.members.cache.get(user.id).roles.remove("751415779504685146")
            } else if (reaction.emoji.name === '😄') {
                await reaction.message.guild.members.cache.get(user.id).roles.remove("751415880730148975")
            }
        }
    });

    client.on("messageReactionAdd", async (reaction, user) => {
        if (reaction.message.partial) await reaction.message.fetch();
        if (reaction.partial) await reaction.fetch

        if (user.bot) return;
        if (reaction.message.channel.id === "752832745104867418") {
            if (reaction.emoji.name === '🔔') {
                await reaction.message.guild.members.cache.get(user.id).roles.add("753607274291003405")
            }
        }
    });

    client.on("messageReactionAdd", async (reaction, user) => {
        if (reaction.message.partial) await reaction.message.fetch();
        if (reaction.partial) await reaction.fetch

        if (user.bot) return;
        if (reaction.message.channel.id === "755187097207308328") {
            if (reaction.emoji.name === '🟥') {
                await reaction.message.guild.members.cache.get(user.id).roles.add("756186590233231381")
            }
            if (reaction.emoji.name === '🟧') {
                await reaction.message.guild.members.cache.get(user.id).roles.add("756186754544828427")
            }
            if (reaction.emoji.name === '🟦') {
                await reaction.message.guild.members.cache.get(user.id).roles.add("756186854331777155")
            }
        }
    });

    client.on("messageReactionRemove", async (reaction, user) => {
        if (reaction.message.partial) await reaction.message.fetch();
        if (reaction.partial) await reaction.fetch

        if (user.bot) return;
        if (reaction.message.channel.id === "755187097207308328") {
            if (reaction.emoji.name === '🟥') {
                await reaction.message.guild.members.cache.get(user.id).roles.remove("756186590233231381")
            }
            if (reaction.emoji.name === '🟧') {
                await reaction.message.guild.members.cache.get(user.id).roles.remove("756186754544828427")
            }
            if (reaction.emoji.name === '🟦') {
                await reaction.message.guild.members.cache.get(user.id).roles.remove("756186854331777155")
            }
        }
    });
}
