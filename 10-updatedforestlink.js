
module.exports = (client) => {

    client.on("message", async (message) => {
        const Discord = require('discord.js')
        prefix = "Time to put down your phone and get back to work! Enter my room code: "
        if (!message.content.startsWith(prefix) || message.author.bot) return;
        else {
            console.log('tree message fired')
            const args = message.content.slice(prefix.length).split(/ +/);
            const command = args.shift().toLowerCase();


            const channel = client.channels.cache.get('754042973850828821');
            const exampleEmbed = new Discord.MessageEmbed()
                .setColor('#337f4e')
                .setTitle(`${message.author.username} wants to plant a tree!`)
                .setThumbnail('https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2F1.bp.blogspot.com%2F-E77muf7rE5k%2FUD5FaQznK8I%2FAAAAAAAAIh4%2FGJXlKvLB7WM%2Fs1600%2FTree%2BIn%2BField%2BWallpapers%2B3.jpg&f=1&nofb=1')
                .setTimestamp()
                .setFooter(`Planter: ${message.author.username} `)
                .addFields(
                    { name: '\u200B', value: 'Forest code:' },
                    { name: `Use ${args[0]}`, value: '\u200B' },
                    { name: '\u200B', value: 'Forest link:', inline: true },
                    { name: `https://forestapp.cc/join-room?token=${args[0]}`, value: '\u200B' },
                    { name: ':stopwatch: Duration:', value: `${args[4]}`, inline: true },
                    { name: '🌴 Tree type:', value: `${args[5]} ${args[6]}`, inline: true },

                )

            let channelembed = await channel.send(exampleEmbed);
            channelembed.react('👥')
            channelembed.react('🔇')
            channelembed.react('1️⃣')
            channelembed.react('2️⃣')
            channelembed.react('3️⃣')

            const welcome = message.client.channels.cache.get('730029372697870347');
            let welcomeembed = await welcome.send(exampleEmbed);
            welcomeembed.react('👥')
            welcomeembed.react('🔇')
            welcomeembed.react('1️⃣')
            welcomeembed.react('2️⃣')
            welcomeembed.react('3️⃣')
        }
    })
}
