module.exports = (client) => {

    client.on("message", async (message) => {
        const { member, content, guild } = message
        const mention = message.author
        const author = mention.id
        const UserId = author

        console.log(`${author} and ${message}`)
    })
}