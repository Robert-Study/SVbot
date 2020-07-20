const Discord = require('discord.js');
const client = new Discord.Client();

const prefix = "Plant trees with me on Forest! Enter "
const prefic = "!"
const pref = "?"

const fs = require('fs');

client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for(const file of commandFiles){
    const command = require(`./commands/${file}`);

    client.commands.set(command.name, command);
}

client.once('ready', () => {
    console.log('StudyVibesBot is online!');
});

//Calendar commands section
client.on('message', message =>{
    if(!message.content.startsWith(prefic) || message.author.bot) return;
 
    const args = message.content.slice(prefic.length).split(/ +/);
    const command = args.shift().toLowerCase();
    
    if(command === 'cal'){
        message.reply('a link to the Study Vibes calendar can be found here: https://tinyurl.com/yawqzozw');
    }
});

//Help commands section
client.on('message', message =>{
    if (message.content.startsWith(`${pref}help`)) {
        message.channel.send('Help categories include: **?cmd**, **?forest**, **?VC**, **?hydra**, **?focus**, **?team**, **?birthday**, **?timers**, **?todo**. Please type either one to get more info!.');
    } else if (message.content.startsWith(`${pref}forest`)){
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
    } else if (message.content.startsWith(`${pref}todo`)){
        const todoembed = new Discord.MessageEmbed()
            .setColor('#337f4e')
            .addFields(
                { name: 'Set up your To-Do List:', value: ` 
                1). **$todo** (this will show your todo list)
                2). **$todo add** "what you want to add to list"
                3). **$todo remove** "number in the list you want to remove"
                4). **$todo clear** (this will remove your whole list)` }
                )
        message.channel.send(todoembed);
    } else if (message.content.startsWith(`${pref}VC`)){
        const vcembed = new Discord.MessageEmbed()
            .setColor('#337f4e')
            .addFields(
                { name: 'Private Voice-Channels', value: 
                `Click the -Join to Create VC- to create a private room, **user commands:**
                
                1). **!voice lock/unlock** : 
                    locks or unlocks a room so that no one else is able to join. 
                2). **!voice name** "*channelname*" : 
                    changes the name of your created channel.
                3). **!voice claim** : gives you ownership over a created channel` }
                )
        message.channel.send(vcembed);
    } else if (message.content.startsWith(`${pref}hydra`)){
        const hydraembed = new Discord.MessageEmbed()
            .setColor('#337f4e')
            .addFields(
                { name: 'How to use Hydra for music:', value: `**I.** Make sure you are in _any_ voice channel.
                **II.** Just drop in an YT-URL of your favorite song or the title of a song in the #Hydra-channel - it starts playing or gets queed up.
                **III.** Use the reaction features underneath the Player in this channel to control the Radio (play, pause, stop, next etc.)` }
                )
        message.channel.send(hydraembed);
    } else if (message.content.startsWith(`${pref}focus`)){
        const focusembed = new Discord.MessageEmbed()
            .setColor('#337f4e')
            .addFields(
                { name: 'How to use Focus Mode:', value: `Focus mode is designed to keep you away from distracting channels, gifs and pings so you can work in peace.
                Enter the Focus world by typing **!focus**, come back to the server by using **!end**.
                
                *note: you will still be able to be tagged in the Study Team timers via the #timers-forest channel!*` }
                )
        message.channel.send(focusembed);
    } else if (message.content.startsWith(`${pref}team`)){
        const focusembed = new Discord.MessageEmbed()
            .setColor('#337f4e')
            .addFields(
                { name: 'How to use the Study Team:', value: `The Study Team is designed to work together in a session. Once you have entered the command **!start** you will get added the role @Study Team. when a reminder is set for the group, you will get tagged. Use **!end** to leave the Team at any moment. 
                
                *Note: if setting a reminder for the Team, use @Study Team*` }
                )
        message.channel.send(focusembed);
    } else if (message.content.startsWith(`${pref}birthday`)){
        const focusembed = new Discord.MessageEmbed()
            .setColor('#337f4e')
            .addFields(
                { name: 'Set up your Birthday!', value: ` If you want to be added to the Birthday list and get mentioned on your birthday in the server (+birthday role) use: **bb.set day-month** (*example: bb.set 28-dec*). 
                *Note: use a 3 letter month code!*

                Use: **bb.remove** to remove yourself from the birthday list.` }
                )
        message.channel.send(focusembed);
    } else if (message.content.startsWith(`${pref}timer`)){
        const focusembed = new Discord.MessageEmbed()
            .setColor('#337f4e')
            .addFields(
                { name: 'How to set session Timers:', value: ` If you want to set a timer or reminder for your session use the commands:
                
                **!timer**: Set a timer with a specific duration (example: !timer 60m Study, sets a timer for 60 min with the name study). :clock1: 
                **!remindme**: Same as the timer function above, but will @mention you when timer is finished.
                **!showtimers**: Shows all current timers :timer:  
                
                *Note: Session timers only work in the #timers-forest channel!*` }
                )
        message.channel.send(focusembed);
    } else if (message.content.startsWith(`${pref}cmd`)){
        message.author.send(`

        __**Commands you can use in the Study Vibes Server:**__
        0). **!cmd** : Gives this command window
        1). **!tree** : Gives an explanation about the Forest app :evergreen_tree: 
        2). **!cal** : Gives a link to the Study Vibes Calendar for Live Streams :movie_camera: 
        3). **!timer**: Set a timer with a specific duration 
        (example: !timer 60m Study, sets a timer for 60 min with the name study). :clock1: 
        4). **!remindme**: Same as the timer function above, but will @mention you when timer is finished.
        5). **!showtimers**: Shows all current timers :timer: 
        6). **!todo** : Gives an explanation about the Reminder Bot in the #📌-to-do channel
        7). **!suggest** : make an anonymous suggestion in the english channel.
        8). **!poll** *'question'* : poll you can use for simple yes or no questions
        9). **!highlight** *'word'* : Carl will DM you if the word is said anywhere on the server
        
        Use: **?help**, **?cmd**, **?forest**, **?VC**, **?hydra**, **?focus**, **?team**, **?birthday**, **?timers**, **?todo** for more specific info!`);
            }

});

//Forest code input section
client.on('message', message =>{
    if(!message.content.startsWith(prefic) || message.author.bot) return;
 
    const args = message.content.slice(prefic.length).split(/ +/);
    const command = args.shift().toLowerCase();
    
    if(command === 'code'){
        const channel = client.channels.cache.get('703937876634894388');
        const exampleEmbed = new Discord.MessageEmbed()
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
                { name: '\u200B', value: 'Good luck! :palm_tree:' }
                )

        channel.send(exampleEmbed);
        const welcome = client.channels.cache.get('732292791287283862');
        welcome.send(exampleEmbed);
        }
});

//Forest automatic link section
client.on('message', message =>{
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

               
        channel.send(exampleEmbed);
        const welcome = client.channels.cache.get('732292791287283862');
        welcome.send(exampleEmbed);
        }
});

client.on('message', message =>{
    if (message.content.startsWith(`${prefic}focus`)) {
        message.reply(`went into deep Focus Mode - don't disturb!`);
        const focus = client.channels.cache.get('730185814822223962');
        focus.send(`Welcome in **Focus Mode** <@${message.author.id}> - to exit please use **!end**.`);
        message.member.roles.add('729706682308886548');
        message.member.roles.remove('707547622591692911');
    }
});

client.on('message', message =>{
    if (message.content.startsWith(`${prefic}start`)) {
        message.reply(`You are now part of the *@Study Team* and will be pinged with every Team reminder!`);
        message.member.roles.add('729444698812579870');
        }
});

client.on('message', message =>{
    if (message.content.startsWith(`${prefic}end`)) {
        const general = client.channels.cache.get('703937876634894388');
        general.send(`<@${message.author.id}> you have left the *Focus Mode* and the *Study Group*!`)
        message.member.roles.remove('729706682308886548');
        message.member.roles.remove('729444698812579870');
        message.member.roles.add('707547622591692911');
    }
});

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

const channelId = '734563927769219073'

const updateMembers = (guild) => {
    const channel = guild.channels.cache.get(channelId)
    channel.setName(`Members: ${guild.memberCount}`)
}
client.once('ready', () => {
    const rolename = 'Verified'
    const role = guild.roles.cache.find((role) => role.name === roleName);
    if (!role) {
        return
    }

    let counter = 0
    guild.members.cache.forEach((member) => {
    // Do they have the role?
        if (member.roles.cache.has(role.id)) {
            ++counter
         }
    })
    const verifiedID = '734564004571250699'
    const Verified = (guild) => {
        const channel = guild.channels.cache.get(verifiedID)
        channel.setName(`Verified Count: ${counter}`)  
}
});

client.on('guildMemberAdd', (member) => updateMembers(member.guild))
client.on('guildMemberRemove', (member) => updateMembers(member.guild))
client.on('guildMemberAdd', (member) => Verified(member.guild))
client.on('guildMemberRemove', (member) => Verified(member.guild))
  
const guild = client.guilds.cache.get('705785746350669888')
updateMembers(guild)
Verified(guild)

client.login(process.env.token);
