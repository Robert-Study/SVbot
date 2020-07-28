const Discord = require('discord.js');

const { Client } = require('discord.js');
const client = new Client({ partials: ['MESSAGE', 'CHANNEL', 'REACTION'] });

const prefix = "Plant trees with me on Forest! Enter "
const prefic = "!"
const pref = "?"
const bprefix = "Birthday"

const fs = require('fs');
const ms = require('ms');

client.commands = new Discord.Collection();

const mongo = require('./mongo')

const connectToMongoDB = async () => {
  await mongo().then((mongoose) => {
    try {
      console.log('Connected to mongodb!')
    } finally {
      mongoose.connection.close()
    }
  })
}

connectToMongoDB()

const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for(const file of commandFiles){
    const command = require(`./commands/${file}`);

    client.commands.set(command.name, command);
}

client.once('ready', () => {
    console.log('StudyVibesBot is online!');
});

//Prefic = '!' commands:
client.on('message', message =>{
    if(!message.content.startsWith(prefic) || message.author.bot) return;
 
    const args = message.content.slice(prefic.length).split(/ +/);
    const command = args.shift().toLowerCase();
    
    if(command === 'cal'){
        client.commands.get('1-cal').execute(message, args);
    } else if(command === 'end'){
        client.commands.get('3-endcommand').execute(message, args);
    } else if(command === 'start'){
        client.commands.get('4-studyteam').execute(message, args);
    } else if(command === 'focus'){
        client.commands.get('5-focus').execute(message, args);
    } else if(command === 'ticket'){
        client.commands.get('6-ticket').execute(message, args);
    } else if(command === 'log'){
        client.commands.get('7-log').execute(message, args);
    }
});

client.on('message', async message =>{
    if(!message.content.startsWith(prefic) || message.author.bot) return;
 
    const args = message.content.slice(prefic.length).split(/ +/);
    const command = args.shift().toLowerCase();

    if(command === 'code'){
        const Discord = require('discord.js');
        const channel = message.client.channels.cache.get('703937876634894388');
        let exampleEmbed = new Discord.MessageEmbed()
            .setColor('#337f4e')
            .setTitle(`${message.author.username} wants to plant a tree! :evergreen_tree:`)
            .setThumbnail('https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2F1.bp.blogspot.com%2F-E77muf7rE5k%2FUD5FaQznK8I%2FAAAAAAAAIh4%2FGJXlKvLB7WM%2Fs1600%2FTree%2BIn%2BField%2BWallpapers%2B3.jpg&f=1&nofb=1')
            .setTimestamp()
            .setFooter(`Planter: ${message.author.username} `)
            .addFields(
                { name: '\u200B', value: 'Forest info:' },
                { name: `Use code: ${args[0]} or click this link: https://www.forestapp.cc/join-room?token=${args[0]}.`, value: '\u200B' },
                { name: ':stopwatch: Duration:', value:`${args[1]}` , inline: true},
                { name: ':closed_lock_with_key: Starting in:', value: `${args[2]}`, inline: true},
                { name: '\u200B', value: 'Good luck! :palm_tree: | Join the team 👥 or go in focus 🔇 by reacting.' }
                )

        let channelembed = await channel.send(exampleEmbed);
        channelembed.react('👥')
        channelembed.react('🔇')

        const welcome = message.client.channels.cache.get('732292791287283862');
        let welcomeembed = await welcome.send(exampleEmbed);
        welcomeembed.react('👥')
        welcomeembed.react('🔇')
        }    
    
});

client.on("messageReactionAdd", async (reaction, user) => {
    if (reaction.message.partial) await reaction.message.fetch();
    if (reaction.partial) await reaction.fetch

    if (user.bot) return;
    if (reaction.emoji.name === '👥'){
        await reaction.message.guild.members.cache.get(user.id).roles.add("729444698812579870")
    }
});

client.on("messageReactionAdd", async (reaction, user) => {
    if (reaction.message.partial) await reaction.message.fetch();
    if (reaction.partial) await reaction.fetch

    if (user.bot) return;
    if (reaction.emoji.name === '🔇'){
        await reaction.message.guild.members.cache.get(user.id).roles.add("729706682308886548")
        await reaction.message.guild.members.cache.get(user.id).roles.remove("707547622591692911")
    }
});

//Prefic = '?' commands:
client.on('message', message =>{
    if(!message.content.startsWith(pref) || message.author.bot) return;
 
    const args = message.content.slice(pref.length).split(/ +/);
    const command = args.shift().toLowerCase();
    
    if(command === 'help'){
        client.commands.get('8-helpgeneral').execute(message, args);
    } else if(command === 'todo'){
        client.commands.get('9-helptodo').execute(message, args);
    } else if(command === 'vc'){
        client.commands.get('10-helpvc').execute(message, args);
    } else if(command === 'hydra'){
        client.commands.get('11-helphydra').execute(message, args);
    } else if(command === 'focus'){
        client.commands.get('12-helpfocus').execute(message, args);
    } else if(command === 'team'){
        client.commands.get('13-helpteam').execute(message, args);
    } else if(command === 'birthday'){
        client.commands.get('14-helpbirthday').execute(message, args);
    } else if(command === 'timer'){
        client.commands.get('15-helptimer').execute(message, args);
    } else if(command === 'cmd'){
        client.commands.get('16-helpcmd').execute(message, args);
    } else if(command === 'forest'){
        client.commands.get('17-helpforest').execute(message, args);
    }
});

//Forest automatic link section
client.on('message', async message =>{
    if(!message.content.startsWith(prefix) || message.author.bot) return;
 
    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();
    
    if(command === 'room'){
        const channel = client.channels.cache.get('703937876634894388');
        const exampleEmbed = new Discord.MessageEmbed()
            .setColor('#337f4e')
            .setTitle(`${message.author.username} wants to plant a tree!`)
            .setThumbnail('https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2F1.bp.blogspot.com%2F-E77muf7rE5k%2FUD5FaQznK8I%2FAAAAAAAAIh4%2FGJXlKvLB7WM%2Fs1600%2FTree%2BIn%2BField%2BWallpapers%2B3.jpg&f=1&nofb=1')
            .setTimestamp()
            .setFooter(`Planter: ${message.author.username} `)
            .addFields(
                { name: '\u200B', value: 'Forest code:' },
                { name: `Use ${args[0]}`, value: '\u200B' },
                { name: '\u200B', value:'Forest link:' , inline: true},
                { name: `${args[6]}`, value: '\u200B' }
                )

        let channelembed = await channel.send(exampleEmbed);
        channelembed.react('👥')
        channelembed.react('🔇')
        
        const welcome = message.client.channels.cache.get('732292791287283862');
        let welcomeembed = await welcome.send(exampleEmbed);
        welcomeembed.react('👥')
        welcomeembed.react('🔇')
        } 
});


//Welcome message DM section
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

//Birthday send message to Announcements
client.on('message', message =>{
    if (message.content.startsWith(`${bprefix}`)){
        const ann = client.channels.cache.get('732559541895561226')
        ann.send(`Happy Birthday!`)
    }
});

//Member counter section
const channelId = '734716661885829160'
const guild = client.guilds.cache.get('703937875720273972')

const updateMembers = (guild) => {
    const channel = guild.channels.cache.get(channelId)
    channel.setName(`Member Count: ${guild.memberCount}`)
}

client.on('guildMemberAdd', (member) => updateMembers(member.guild))
client.on('guildMemberRemove', (member) => updateMembers(member.guild))

//Verified counter section
client.on('message', message =>{
    if (message.content.startsWith(`${prefic}end`)) {
        const roleName = 'Verified'
        const role = message.guild.roles.cache.find((role) => role.name === roleName)

        if (!role) {
            return
        }

        let counter = 140

        message.guild.members.cache.forEach((member) => {
            if (member.roles.cache.has('707547622591692911')) {
             ++counter
            }
        })

        const channelVerified = '734767561824010390'
        const VerMembers = (guild) => {
            const verchannel = message.guild.channels.cache.get(channelVerified)
            verchannel.setName(`Verified Members: ${counter}`)
        }
        
        VerMembers(message.guild)
        updateMembers(message.guild)
        console.log(`${roleName} has ${counter} user(s)!`)
    }
});

//Locked in Focus section
client.on('message', message => {
    let args = message.content.substring(prefic.length).split(" ");
 
    switch (args[0]) {
        case 'fcslock':
            var person  = message.guild.member(message.mentions.users.first() || message.guild.members.cache.get(args[1]));
            if(!person) return  message.reply("I CANT FIND THE USER " + person)
 
            let role = message.guild.roles.cache.find(role => role.name === "Locked in Focus");           
 
            if(!role) return message.reply("Couldn't find the lock role.")
 
 
            let time = args[2];
            if(!time){
                return message.reply("You didnt specify a time!");
            }
 
            person.roles.add(role.id)
            message.channel.send(`@${person.user.tag} has now been locked in Focus for ${ms(ms(time))}`)
 
            setTimeout(function(){
                person.roles.remove(role.id);
                console.log(role.id)
                message.channel.send(`@${person.user.tag} has been unlocked.`)
            }, ms(time));
            break;
        }
     
     
});

//Locked in Focus user-section
client.on('message', message =>{
    let args = message.content.substring(prefic.length).split(" ");
 
    switch (args[0]) {
        case 'lock':
            let role = message.guild.roles.cache.find(role => role.name === "Locked in Focus");  
            let focusrole = message.guild.roles.cache.find(role => role.name === "Focused");
            let verifiedrole = message.guild.roles.cache.find(role => role.name === "Verified");        
 
            if(!role) return message.reply("Couldn't find the lock role.")
            if(!focusrole) return message.reply("Couldn't find the focus role.")
            if(!verifiedrole) return message.reply("Couldn't find the verified role.")
 
            let time = args[1];
            if(!time){
                return message.reply("You didnt specify a time!");
            }
 
            message.member.roles.add(role.id);
            message.member.roles.add(focusrole.id);
            message.member.roles.remove(verifiedrole.id);
            const focus = client.channels.cache.get('730185814822223962');
            focus.send(`${"<@" + message.author.id + ">"}, you have now been locked in Focus Mode for ${ms(ms(time))}`)
 
            setTimeout(function(){
                message.member.roles.remove(role.id);
                message.member.roles.remove(focusrole.id);
                message.member.roles.add(verifiedrole.id);
                console.log(role.id)
                const general = client.channels.cache.get('703937876634894388');
                general.send(`${"<@" + message.author.id + ">"}, you have now been unlocked`)
            }, ms(time));
            break;
        }  
});

client.login(process.env.token);
