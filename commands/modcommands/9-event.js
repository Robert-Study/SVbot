module.exports = {
    commands: ['event'],
    minArgs: 0,
    maxArgs: 0,
   

    callback: (message, arguments, text) => {
        const Discord = require('discord.js');
        const hydraembed = new Discord.MessageEmbed()
        .setColor('#1a9cd8')
        .addFields(
            { name: 'Event planned - Saturday 19/Sep 2020', value:'**SD** will give a presentation on the topic "Permaculture." To prepare for his presentation at university. Interested people can join. The presentation will be in a private channel named "Permaculture" \n\n**19 September 2020, Saturday**\nDuration: 20-30 minutes + Q/A\nTime: 10:30 PM IST (Indian Standard Time)\n\nPermaculture is an ethical and sustainable way of doing farming. As explained by one of the founders of this idea Bill Mollison, " The philosophy behind permaculture is one of working with, rather than against nature, of protracted and thoughtful observation rather than protracted and thoughtless action; of looking at systems in all their functions, rather than asking only one yield of them; and of allowing systems to demonstrate their own evolution."\nGiven how industrial agriculture has led to so many ecological and climate concerns, it becomes essential to look for better farming methods. Permaculture has the potential to address all the problems caused by industrial agriculture.\nDisclaimer: I dont have prior experience in giving a presentation, so it may feel boring to some of you. But you may learn some new concepts that are very crucial for addressing social and climate change concerns related to agriculture.'
        })
            
    message.channel.send(hydraembed); 
    }
}