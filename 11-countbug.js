module.exports = (client) => {
client.on('message', ({channel, content, member}) => {
    let count = 0
    let timeout

    if (channel.id === '730029372697870347') {
      if (member.user.bot) return
      if (Number(content) === count + 1) {
        count++
        if (timeout) client.clearTimeout(timeout)
        timeout = client.setTimeout(
          () => channel.send(++count).catch(console.error),
          3000000
        )

      } else if (member.id !== client.user.id) {
        channel.send(`${member} messed up! Start counting from 1!`).catch(console.error)
        count = 0
        if (timeout) client.clearTimeout(timeout)
      }
    }
  })
}