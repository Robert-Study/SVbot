module.exports = {
    name: '6-ticket',
    description: "ticket command",
    execute(message, args){
        message.reply(', your ticket has been submitted, a Mod will PM you shortly.');
        const modchannel = message.client.channels.cache.get('730029372697870347');
        let modrole = "707581746937462794";
        modchannel.send(`<@${message.author.id}> has a problem, please <@&${modrole}> PM this member.`);
    }
}