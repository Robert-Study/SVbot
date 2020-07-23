module.exports = {
    name: '16-helpcmd',
    description: "!code command that gives forest embed",
    execute(message, args){
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
}