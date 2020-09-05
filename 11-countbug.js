module.exports = (client) => {
    client.on('message', async (message) => {
        const { member, content, guild } = message
        let number = content.toLowerCase() 
        let count = 0

        if (message.channel.id === '730029372697870347') {
            console.log('channel found')
            console.log(number)
            if (member.user.bot) return
            if (number !== (count +1)) {
                message.channel.send(`${member} messed up! Start counting from 1!`).catch(console.error)
                count = 0}
            else{ 
                count++
            }
        }
    })
}