module.exports = {
    commands: ['question', 'life', 'icebreaker'],
    minArgs: 0,
    maxArgs: 1,
    callback: (message, arguments, text) => {
        //get questions from randomQuestion.json
        const { randomQuestion } = require('@JSON/randomQuestion.json');
        //randomizing the question and sending to channel
        message.channel.send(`**Question:** ${randomQuestion[Math.floor(Math.random() * randomQuestion.length )]}`
        )
    }
}