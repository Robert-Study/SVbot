module.exports = (client) => {
    client.on('message', async (message) => {
        const { member, content, guild } = message
        let number = content.toLowerCase() 
        let count = 0
        let timeout

        if (message.channel.id === '730029372697870347') {
            console.log('channel found')
            if (member.user.bot) return
            if (number === (count +1)) {
                console.log('adding 1')
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