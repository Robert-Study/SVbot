module.exports = (client) => {
    const channelId = '734716661885829160'
    const guild = client.guilds.cache.get('703937875720273972')
    
    const updateMembers = (guild) => {
        const channel = guild.channels.cache.get(channelId)
        channel.setName(`Member Count: ${guild.memberCount}`)}

    client.on('guildMemberAdd', (member) => updateMembers(member.guild))
    client.on('guildMemberRemove', (member) => updateMembers(member.guild))
}
