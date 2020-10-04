module.exports = {
    commands: ['helpgames', 'infogames'],
    minArgs: 0,
    maxArgs: 0,
    callback: (message, arguments, text) => {
        message.channel.send('**Current Mini-games on the server**\n\n__🔢 Count-with-bot 🔢__\nCount from 0 to ♾ with the bot in the counting channel, counts have to be alternated between members. Saves can be earned at checkpoint (50, 101, 500 and 1001). Count wrong? A save will kick in and you can keep on counting, or start again at 1 when the saves have run out.\n\n__🤔 Simon Says 🤔__\nSimon will at random times post a message like "Simon says: pineapple" -> if you reply with pineapple you get a point. Tho when simon **asks** for something you should not reply.\n\n__🌟 StarBar 🌟__\nAt the StarBar the levels increase with the hour (at X:00), claiming a level means resetting the bar to 0. Try to claim the highest level (5 stars) possible, before someone else!');
    }
}