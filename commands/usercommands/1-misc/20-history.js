module.exports = {
    commands: ['history'],
    minArgs: 0,
    maxArgs: 0,
    callback: async (message, arguments) => {
        const Discord = require("discord.js");
        const snekfetch = require('snekfetch');
        const fetch = require('node-fetch');

        const { website } = await fetch('http://history.muffinlabs.com/date').then(() => {
            
            const body = JSON.parse(website);
            const events = body.data.Events;
            const event = events[Math.floor(Math.random() * events.length)];
            const embed = new Discord.MessageEmbed()
                .setColor(0x00A2E8)
                .setURL(body.url)
                .setTitle(`On this day (${body.date})...`)
                .setTimestamp()
                .setDescription(`${event.year}: ${event.text}`);

            return message.channel.send(embed)
        })
    }
}





