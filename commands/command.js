module.exports = {
    name: 'cmds',
    description: "this is a command.dm!",
    execute(message, args){
        message.channel.send(`
        
    **__Commands you can use in chat__**
0). **!cmd** : Gives this command window
1). **!tree** : Gives an explanation about the Forest app :evergreen_tree: 
2). **!cal** : Gives a link to the Study Vibes Calendar for Live Streams :movie_camera: 
3). **!timer**: Set a timer with a specific duration (example: !timer 60m Study, sets a timer for 60 min with the name study). :clock1: 
4). **!remindme**: Same as the timer function above, but will @mention you when timer is finished.
5). **!showtimers**: Shows all current timers :timer: 
6). **!todo** : Gives an explanation about the Reminder Bot in the #📌-to-do channel
7). **!suggest** : make an anonymous suggestion in the english channel.
8). **!poll** *'question'* : poll you can use for simple yes or no questions
9). **!highlight** *'word'* : Carl will DM you if the word is said anywhere on the server

__**Private Voice channels**__
10). **!voice lock/unlock** : locks or unlocks a room so that no one else is able to join. 
11). **!voice name** *channelname* : changes the name of your created channel.
12). **!voice claim** : gives you ownership over a created channel

__**Study Team and Focus mode**__
13). **!start** : Gives you the role "Study Team", when a reminder is set for the group, you will get tagged (if setting a reminder for the group, use @Study Team )
14). **!focus** : Blocks all the distracting channels and let's you focus in peace. 
15). **!end** : To end __either__ the Study Team or the Focus mode, use !end command!

__**Birthday list**__
16). If you want to be added to the Birthday list and get mentioned on your birthday in the server (+birthday role) use: **bb.set day-month** (example: bb.set 28-dec) use a 3 letter month code
17). **bb.remove** to remove yourself from the birthday list`);
    }
}
