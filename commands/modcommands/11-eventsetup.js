module.exports = {
    commands: ['setevent'],
    minArgs: 0,
    maxArgs: 0,


    callback: (message, arguments, text) => {
        const filter = m => m.content.includes('discord');
        const collector = message.channel.createMessageCollector(filter, { time: 15000 });

        collector.on('collect', m => {
            console.log(`Collected ${m.content}`);
        });
    }
}
