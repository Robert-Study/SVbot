module.exports = {
    name: '4-studyteam',
    description: "!start command that enables the study group",
    execute(message, args){
        message.reply(`You are now part of the *@Study Team* and will be pinged with every Team reminder!`);
        message.member.roles.add('729444698812579870');
    }
}