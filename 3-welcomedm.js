module.exports = (client) => {
    client.on("guildMemberAdd", member => {
        const welcomeembed = new Discord.MessageEmbed()
                .setColor('#337f4e')
                .setTimestamp()
                .addFields(
                    { name: 'Welcome to the Study Vibes Discord!', value: `
                    
                    Hi! Welcome to the **Study Vibes official Discord Server**
                    
    
                    To get started please read the server #❗-rules-n-info channel!
                    
                    Once you have read and agreed with the rules, please **click te checkbox** :white_check_mark: in the #👋🏼-get-started page for full access to our Server's channels. 
                    
                    **Don't forget to have a look at the #Toolbox channel to unlock your Server preferences once you have verified your account!**
                    
                    Hope you have a great time here and meet a lot of awesome like-minded Study Buddies! If you have any questions feel free to DM one of the Mods!
                    
                    All the best, 
                    
                    Study Vibes` }
                    )
            member.send(welcomeembed);
    });
}   
    