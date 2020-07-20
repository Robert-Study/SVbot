module.exports = (client) => {
  const channelId = '734563927769219073'

  const updateMembers = (guild) => {
    const channel = guild.channels.cache.get(channelId)
    channel.setName(`Members: ${guild.memberCount}`)
  }

  const rolename = 'Verified'
  const role = guild.roles.cache.find((role) => role.name === roleName)

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

  client.on('guildMemberAdd', (member) => updateMembers(member.guild))
  client.on('guildMemberRemove', (member) => updateMembers(member.guild))
  client.on('guildMemberAdd', (member) => Verified(member.guild))
  client.on('guildMemberRemove', (member) => Verified(member.guild))
  
  const guild = client.guilds.cache.get('705785746350669888')
  updateMembers(guild)
  Verified(guild)
}