module.exports = {
    commands: ['infofores', 'helpforest','forest'],
    minArgs: 0,
    maxArgs: 0,
    callback: (message, arguments, text) => {
        const Discord = require('discord.js');
        const forestembed = new Discord.MessageEmbed()
        .setColor('#337f4e')
        .addFields(
            { name: 'How to use Forest app', value: 
            `:evergreen_tree: Forest is an App that helps you stay focused by growing a tree. :evergreen_tree:
            If you leave the app or give up, the tree dies. :fallen_leaf:
            
            You will need the Premium App if you want to join our forest rooms.
            Download link: https://www.forestapp.cc/
            
            To announce your tree use **!code 'forest-code' 'duration' 'starttime'**
            It's also possible to share your link directly from forest in an embed!` }
            )
            message.channel.send(forestembed);
    }
}