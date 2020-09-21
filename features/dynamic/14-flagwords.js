module.exports = (client) => {

  client.on("message", async (message) => {
    const { flaggedwords } = require('@JSON/flaggedwords.json');
    const { member, content, guild } = message
    const mention = message.author
    const author = mention.id
    const UserId = author

    if (message.author.bot) return;
    if (message.channel.id === "746831486451187753") return;

    for (var i = 0; i < flaggedwords.length; i++) {
      if (message.content.includes(flaggedwords[i])) {
        const warningcountSchema = require('@schemas/1-warningcount')
        const messageCountSchema = require('@schemas/12-messagecount')

        message.delete()
        message.reply('your message was flagged for inappropriate content. A moderator will be here soon.')
        message.channel.send(` __Flagged message:__\n||${content}||`)

        const results = await warningcountSchema
            .findOneAndUpdate(
              {
                UserID: mention,
              },
              {
                $inc: {
                  warnings: 1,
                },
              },
              {
                upsert: true,
                new: true,
              }
            )
            .exec()
        console.log(results)
        let warningcount = await warningcountSchema.findOne({
          UserID: author
        })
        console.log(warningcount)
        
        let count = warningcount.warnings
        console.log(count)

        let messages = await messageCountSchema.findOne({
          UserId: author
        })

        console.log(messages)


        let messagecount = messages.messageCount
        console.log(messagecount)

        let average = (messagecount / count)
        console.log(average)

        

        if ((messagecount / count) < 200) {

          guild.members.cache.get(UserId).roles.remove("707547622591692911")

          const categoryId = "703937876634894387";
          let role = message.guild.roles.cache.find(role => role.name === "@everyone");
          let modrole = message.guild.roles.cache.find(role => role.name === "StudyVibes Team");
          var userName = message.author.username;
          var userDiscriminator = message.author.discriminator;

          var bool = false;

          message.guild.channels.cache.forEach((channel) => {
            if (channel.name == userName.toLowerCase() + "-" + userDiscriminator) {

              bool = true;
            }
          });

          if (bool == true) return;

          message.guild.channels.create(userName + "-" + userDiscriminator, "text").then((createdChan) => {
            createdChan.setParent(categoryId).then((settedParent) => {
              settedParent.updateOverwrite(role, {
                "VIEW_CHANNEL": false,
                "READ_MESSAGES": false, "SEND_MESSAGES": false,
                "ATTACH_FILES": false, "CONNECT": false,
                "CREATE_INSTANT_INVITE": false, "ADD_REACTIONS": false
              });

              settedParent.updateOverwrite(modrole, {
                "VIEW_CHANNEL": true,
                "READ_MESSAGES": true, "SEND_MESSAGES": true,
                "ATTACH_FILES": true, "CONNECT": true,
                "CREATE_INSTANT_INVITE": true, "ADD_REACTIONS": true
              });

              settedParent.updateOverwrite(message.author, {
                "VIEW_CHANNEL": true,
                "READ_MESSAGES": true, "SEND_MESSAGES": true,
                "ATTACH_FILES": true, "CONNECT": true,
                "CREATE_INSTANT_INVITE": false, "ADD_REACTIONS": true
              });

              var embedParent = new discord.MessageEmbed()
                .setTitle("Hi, " + message.author.username.toString())
                .setDescription(`You have been quarantained for security reasons. A mod will be here shortly`);

              settedParent.send(embedParent);
            }).catch(err => {
              message.channel.send("Something went wrong");
            });

          }).catch(err => {
            message.channel.send("Something went wrong");
          });

          

          break;

        }else{
          const results = await warningcountSchema
            .findOneAndUpdate(
              {
                UserID: mention,
              },
              {
                $inc: {
                  warnings: 1,
                },
              },
              {
                upsert: true,
              }
            )
            .exec()

          break;
        }
      }
    }
  })
}