module.exports = {
    commands: ['ticket'],
    minArgs: 0,
    maxArgs: 0,
    callback: async(message, arguments, text) => {
        const discord = require('discord.js')
        const categoryId = "703937876634894387";
        
        let role = message.guild.roles.cache.find(role => role.name === "@everyone");
        let role = message.guild.roles.cache.find(role => role.name === "Mini-Moderator");

        var userName = message.author.username;
        var userDiscriminator = message.author.discriminator;

        var bool = false;

        message.guild.channels.cache.forEach((channel) => {
            if (channel.name == userName.toLowerCase() + "-" + userDiscriminator) {
 
            message.channel.send("You already have a support channel");
 
            bool = true;
        }
 
    });

    if (bool == true) return;

    var embedCreateTicket = new discord.MessageEmbed()
        .setTitle("Hi, " + message.author.username)
        .setFooter("I have made you a support channel");

    message.channel.send(embedCreateTicket);

    message.guild.channels.create(userName + "-" + userDiscriminator, "text").then((createdChan) => {
        createdChan.setParent(categoryId).then((settedParent) => {
            settedParent.updateOverwrite(role, {
                "VIEW_CHANNEL": false,
                "READ_MESSAGES": false, "SEND_MESSAGES": false,
                "ATTACH_FILES": false, "CONNECT": false,
                "CREATE_INSTANT_INVITE": false, "ADD_REACTIONS": false
            });            
            
            settedParent.updateOverwrite(modrole, {
                "VIEW_CHANNEL": true,
                "READ_MESSAGES": true, "SEND_MESSAGES": true,
                "ATTACH_FILES": true, "CONNECT": true,
                "CREATE_INSTANT_INVITE": true, "ADD_REACTIONS": true
            }); 

            settedParent.updateOverwrite(message.author, {
                "VIEW_CHANNEL": true,
                "READ_MESSAGES": true, "SEND_MESSAGES": true,
                "ATTACH_FILES": true, "CONNECT": true,
                "CREATE_INSTANT_INVITE": false, "ADD_REACTIONS": true
            });

            var embedParent = new discord.MessageEmbed()
            .setTitle("Hi, " + message.author.username.toString())
            .setDescription("Please write your question/message here. Mods: To close write !close");

        settedParent.send(embedParent);
    }).catch(err => {
        message.channel.send("Something went wrong");
    });

}).catch(err => {
    message.channel.send("Something went wrong");
});

}
}

