
module.exports = {
    commands: ['start'],
    minArgs: 0,
    maxArgs: 0,
    callback: (message, arguments, text) => {
        message.reply(`You are now part of the **Study Team** and will be pinged with every Team reminder!`);
        message.member.roles.add('729444698812579870');
   }
}