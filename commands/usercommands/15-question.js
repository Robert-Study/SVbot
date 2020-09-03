module.exports = {
    commands: ['question', 'life', 'icebreaker'],
    minArgs: 0,
    maxArgs: 1,
    callback: (message, arguments, text) => {
        const { randomQuestion } = require('../../randomQuestion.json');
        const Discord = require('discord.js');
        message.channel.send(`**Question:** ${randomQuestion[Math.floor(Math.random() * randomQuestion.length )]}`
        )
    }
}