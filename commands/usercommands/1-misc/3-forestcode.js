module.exports = {
    commands: ['code'],
    minArgs: 3,
    maxArgs: 3,
    expectedArgs: '<code> <duration> <starttime>',

    callback: async (message, arguments, text) => {
        const Discord = require('discord.js');
        const englishchannel = message.client.channels.cache.get('703937876634894388');
        const forestchannel = message.client.channels.cache.get('732292791287283862');

        const { randomForest } = require('@JSON/randomForest.json');
        let thumb = randomForest[Math.floor(Math.random() * randomForest.length)]

        const forestSchema = require("@schemas/17-forestschema")
        const GuildID = "703937875720273972"

        let time = `${arguments[1]}m`;
        let addtime = ms(`${time}`)
        if (isNaN(addtime)) { message.reply('An error occured - Please only write the amount of min as a number (60,120,180)') }
        if (addtime < 120000) { message.reply(`you can't lock yourself for less than 2m`) }

        let startTime = new Date(Date.now());
        let endTime = new Date(startTime.getTime() + addtime);
        let structuretime = moment(endTime).format('DD/MM/YYYY-hh:mm')
        let uptime = (arguments[1] / 60)

        result = await forestSchema.findOne({
            GuildID: GuildID,
            taken: 0
        })

        if (!result) {

            //create an embed with the arguments provided
            let forestEmbed = new Discord.MessageEmbed()
                .setColor('#337f4e')
                .setTitle(`${message.author.username} wants to plant a tree! :evergreen_tree:`)
                .setThumbnail(`${thumb}`)
                .setTimestamp()
                .setFooter(`Planter: ${message.author.username} `)
                .addFields(
                    { name: '\u200B', value: 'Forest info:' },
                    { name: `Use code: ${arguments[0]} or click this link: https://www.forestapp.cc/join-room?token=${arguments[0]}.`, value: '\u200B' },
                    { name: ':stopwatch: Duration:', value: `${arguments[1]} min`, inline: true },
                    { name: ':closed_lock_with_key: Starting in:', value: `${arguments[2]} min`, inline: true },
                    { name: '\u200B', value: 'Good luck! :palm_tree: | Join the team 👥 or go in focus 🔇 by reacting.| Log time by reacting to the amount of hours!' }
                )

            //send the embed to english channel and react
            let englishembed = await englishchannel.send(forestEmbed);
            englishembed.react('👥')
            englishembed.react('🔇')
            englishembed.react('1️⃣')
            englishembed.react('2️⃣')
            englishembed.react('3️⃣')

            //send the embed to forest channel and react
            let forestembed = await forestchannel.send(forestEmbed);
            forestembed.react('👥')
            forestembed.react('🔇')
            forestembed.react('1️⃣')
            forestembed.react('2️⃣')
            forestembed.react('3️⃣')
        }

        else {
            for (items of result) {
                let color = items.color

                if (color === 'red') {
                    //create an embed with the arguments provided
                    let forestEmbed = new Discord.MessageEmbed()
                        .setColor('#337f4e')
                        .setTitle(`${message.author.username} wants to plant a tree! :evergreen_tree:`)
                        .setThumbnail(`${thumb}`)
                        .setTimestamp()
                        .setFooter(`Planter: ${message.author.username} `)
                        .addFields(
                            { name: '\u200B', value: 'Forest info:' },
                            { name: `Use code: ${arguments[0]} or click this link: https://www.forestapp.cc/join-room?token=${arguments[0]}.`, value: '\u200B' },
                            { name: ':stopwatch: Duration:', value: `${arguments[1]} min`, inline: true },
                            { name: ':closed_lock_with_key: Starting in:', value: `${arguments[2]} min`, inline: true },
                            { name: '\u200B', value: 'Good luck! :palm_tree: | Join the 🔴 team or go in focus 🔇 by reacting.| Time is logged automatically when clicking 🔴 or reacting with the amount of hours.' }
                        )

                    //send the embed to english channel and react
                    let englishembed = await englishchannel.send(forestEmbed);
                    englishembed.react('🔴')
                    englishembed.react('🔇')
                    englishembed.react('1️⃣')
                    englishembed.react('2️⃣')
                    englishembed.react('3️⃣')

                    //send the embed to forest channel and react
                    let forestembed = await forestchannel.send(forestEmbed);
                    forestembed.react('🔴')
                    forestembed.react('🔇')
                    forestembed.react('1️⃣')
                    forestembed.react('2️⃣')
                    forestembed.react('3️⃣')

                    let treetaken = await forestSchema.findOneAndUpdate(
                        {
                            color: 'red'
                        },
                        {
                            taken: 1,
                            time: uptime,
                            endtime: structuretime,
                        },
                        {
                            upsert: true,
                            new: true
                        })
                }


                if (color === 'blue') {
                    //create an embed with the arguments provided
                    let forestEmbed = new Discord.MessageEmbed()
                        .setColor('#337f4e')
                        .setTitle(`${message.author.username} wants to plant a tree! :evergreen_tree:`)
                        .setThumbnail(`${thumb}`)
                        .setTimestamp()
                        .setFooter(`Planter: ${message.author.username} `)
                        .addFields(
                            { name: '\u200B', value: 'Forest info:' },
                            { name: `Use code: ${arguments[0]} or click this link: https://www.forestapp.cc/join-room?token=${arguments[0]}.`, value: '\u200B' },
                            { name: ':stopwatch: Duration:', value: `${arguments[1]} min`, inline: true },
                            { name: ':closed_lock_with_key: Starting in:', value: `${arguments[2]} min`, inline: true },
                            { name: '\u200B', value: 'Good luck! :palm_tree: | Join the 🔵 team or go in focus 🔇 by reacting.| Time is logged automatically when clicking 🔵 or reacting with the amount of hours.'  }
                        )

                    //send the embed to english channel and react
                    let englishembed = await englishchannel.send(forestEmbed);
                    englishembed.react('🔵')
                    englishembed.react('🔇')
                    englishembed.react('1️⃣')
                    englishembed.react('2️⃣')
                    englishembed.react('3️⃣')

                    //send the embed to forest channel and react
                    let forestembed = await forestchannel.send(forestEmbed);
                    forestembed.react('🔵')
                    forestembed.react('🔇')
                    forestembed.react('1️⃣')
                    forestembed.react('2️⃣')
                    forestembed.react('3️⃣')

                    let treetaken = await forestSchema.findOneAndUpdate(
                        {
                            color: 'blue'
                        },
                        {
                            taken: 1,
                            time: uptime,
                            endtime: structuretime,
                        },
                        {
                            upsert: true,
                            new: true
                        })

                }
                if (color === 'orange') {
                    //create an embed with the arguments provided
                    let forestEmbed = new Discord.MessageEmbed()
                        .setColor('#337f4e')
                        .setTitle(`${message.author.username} wants to plant a tree! :evergreen_tree:`)
                        .setThumbnail(`${thumb}`)
                        .setTimestamp()
                        .setFooter(`Planter: ${message.author.username} `)
                        .addFields(
                            { name: '\u200B', value: 'Forest info:' },
                            { name: `Use code: ${arguments[0]} or click this link: https://www.forestapp.cc/join-room?token=${arguments[0]}.`, value: '\u200B' },
                            { name: ':stopwatch: Duration:', value: `${arguments[1]} min`, inline: true },
                            { name: ':closed_lock_with_key: Starting in:', value: `${arguments[2]} min`, inline: true },
                            { name: '\u200B', value: 'Good luck! :palm_tree: | Join the 🟠 team or go in focus 🔇 by reacting.| Time is logged automatically when clicking 🟠 or reacting with the amount of hours.' }
                        )

                    //send the embed to english channel and react
                    let englishembed = await englishchannel.send(forestEmbed);
                    englishembed.react('🟠')
                    englishembed.react('🔇')
                    englishembed.react('1️⃣')
                    englishembed.react('2️⃣')
                    englishembed.react('3️⃣')

                    //send the embed to forest channel and react
                    let forestembed = await forestchannel.send(forestEmbed);
                    forestembed.react('🟠')
                    forestembed.react('🔇')
                    forestembed.react('1️⃣')
                    forestembed.react('2️⃣')
                    forestembed.react('3️⃣')

                    let treetaken = await forestSchema.findOneAndUpdate(
                        {
                            color: 'orange'
                        },
                        {
                            taken: 1,
                            time: uptime,
                            endtime: structuretime,
                        },
                        {
                            upsert: true,
                            new: true
                        })
                }
                if (color === 'green') {
                    //create an embed with the arguments provided
                    let forestEmbed = new Discord.MessageEmbed()
                        .setColor('#337f4e')
                        .setTitle(`${message.author.username} wants to plant a tree! :evergreen_tree:`)
                        .setThumbnail(`${thumb}`)
                        .setTimestamp()
                        .setFooter(`Planter: ${message.author.username} `)
                        .addFields(
                            { name: '\u200B', value: 'Forest info:' },
                            { name: `Use code: ${arguments[0]} or click this link: https://www.forestapp.cc/join-room?token=${arguments[0]}.`, value: '\u200B' },
                            { name: ':stopwatch: Duration:', value: `${arguments[1]} min`, inline: true },
                            { name: ':closed_lock_with_key: Starting in:', value: `${arguments[2]} min`, inline: true },
                            { name: '\u200B', value: 'Good luck! :palm_tree: | Join the 🟢 team or go in focus 🔇 by reacting.| Time is logged automatically when clicking 🟢 or reacting with the amount of hours.'  }
                        )

                    //send the embed to english channel and react
                    let englishembed = await englishchannel.send(forestEmbed);
                    englishembed.react('🟢')
                    englishembed.react('🔇')
                    englishembed.react('1️⃣')
                    englishembed.react('2️⃣')
                    englishembed.react('3️⃣')

                    //send the embed to forest channel and react
                    let forestembed = await forestchannel.send(forestEmbed);
                    forestembed.react('🟢')
                    forestembed.react('🔇')
                    forestembed.react('1️⃣')
                    forestembed.react('2️⃣')
                    forestembed.react('3️⃣')

                    let treetaken = await forestSchema.findOneAndUpdate(
                        {
                            color: 'green'
                        },
                        {
                            taken: 1,
                            time: uptime,
                            endtime: structuretime,
                        },
                        {
                            upsert: true,
                            new: true
                        })


                }
            }
        }
    }
}