module.exports = {
    name: '2-life',
    description: "!code command that gives forest embed",
    execute(message, args){
        const Discord = require('discord.js');
        const focusembed = new Discord.MessageEmbed()
        .setColor('#337f4e')
        .addFields(
            { name: 'What is life', value: ` 
            Life is indeed difficult, partly because of the real difficulties we must overcome in order to survive, and partly because of our own innate desire to always do better, to overcome new challenges, to self-actualize. Happiness is experienced largely in striving towards a goal, not in having attained things, because our nature is always to want to go on to the next endeavor.
            *Albert Ellis, Michael Abrams, Lidia Dengelegi, The Art & Science of Rational Eating, 1992*` }
            )
    message.channel.send(focusembed);
        }
}