module.exports = {
    commands: ['history'],
    minArgs: 0,
    maxArgs: 0,
    callback: async (message, arguments) => {
        const Discord = require("discord.js");
        const snekfetch = require('snekfetch');

        const { text } = await snekfetch
            .get('http://history.muffinlabs.com/date');
        const body = JSON.parse(text);
        const events = body.data.Events;
        const event = events[Math.floor(Math.random() * events.length)];
        const embed = new Discord.MessageEmbed()
            .setColor(0x00A2E8)
            .setURL(body.url)
            .setTitle(`On this day (${body.date})...`)
            .setTimestamp()
            .setDescription(`${event.year}: ${event.text}`);

        return message.channel.send(embed)
    }
}





