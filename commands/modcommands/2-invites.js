module.exports = {
  commands: 'invites',
  description: 'Displays who has invited the most members',
  permissions: 'BAN_MEMBERS',
  callback: (message) => {
    return
    const { guild } = message

    guild.fetchInvites().then((invites) => {
      const inviteCounter = {}

      invites.forEach((invite) => {
        const { uses, inviter } = invite
        const { username, discriminator } = inviter

        const name = `${username}#${discriminator}`

        inviteCounter[name] = (inviteCounter[name] || 0) + uses
        console.log(invite)
      })

      let replyText = 'Top 5 user invites:'

      const sortedInvites = Object.keys(inviteCounter).sort(
        (a, b) => inviteCounter[b] - inviteCounter[a])

      console.log(inviteCounter)

      sortedInvites.length = 5

      for (const invite of sortedInvites) {
        const count = inviteCounter[invite]
        replyText += `\n${invite} has invited ${count} member(s)!`
      }

      message.reply(replyText)
    })
  },
}