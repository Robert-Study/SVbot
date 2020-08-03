
module.exports = {
    commands: ['infohydra','helphydra'],
    minArgs: 0,
    maxArgs: 0,
    callback: (message, arguments, text) => {
        const Discord = require('discord.js');
        const hydraembed = new Discord.MessageEmbed()
        .setColor('#337f4e')
        .addFields(
            { name: 'How to use Hydra for music:', value: `**I.** Make sure you are in _any_ voice channel.
            **II.** Just drop in an YT-URL of your favorite song or the title of a song in the #Hydra-channel - it starts playing or gets queed up.
            **III.** Use the reaction features underneath the Player in this channel to control the Radio (play, pause, stop, next etc.)` }
            )
    message.channel.send(hydraembed); 
    }
}