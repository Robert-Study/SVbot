module.exports = {
    commands: ['battleship', 'ship'],
    minArgs: 0,
    maxArgs: 0,
    expectedArgs: '!starbar',

    callback: async (message, arguments, text) => {
        const { DiscordBattleShip } = require("discord-battleship");
 
        const BattleShip = new DiscordBattleShip({
            embedColor: "RED", 
            prefix: "!", 
        });

        await BattleShip.createGame(message);
    }
}