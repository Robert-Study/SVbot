module.exports = {
    commands: ['setevent'],
    minArgs: 0,
    maxArgs: 0,
   

    callback: (message, arguments, text) => {
        const Discord = require('discord.js');
        const prompt = require('prompt')

        prompt.start();

        prompt.get(['username', 'email'], function (err, result) {
            //
            // Log the results.
            //
            console.log('Command-line input received:');
            console.log('  username: ' + result.username);
            console.log('  email: ' + result.email);
        })
    }
}