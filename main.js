const path = require('path')
const fs = require('fs')
const Discord = require('discord.js')

const { Client } = require('discord.js');
const client = new Client({ partials: ['MESSAGE', 'CHANNEL', 'REACTION'] });

const ms = require ('ms')
const messagecounter = require ('./1-messagecounter')
const roleselect = require ('./2-roleselect.js')
const welcomedm = require ('./3-welcomedm')
const forestlink = require ('./5-forestlink')
const membercounter = require('./6-membercounter')

messagecounter(client)
roleselect(client)
welcomedm(client)
forestlink(client)
membercounter(client)


client.on('ready', async () => {
  console.log('The client is ready!')

  const baseFile = 'command-base.js'
  const commandBase = require(`./commands/${baseFile}`)

  const readCommands = (dir) => {
    const files = fs.readdirSync(path.join(__dirname, dir))
    for (const file of files) {
      const stat = fs.lstatSync(path.join(__dirname, dir, file))
      if (stat.isDirectory()) {
        readCommands(path.join(dir, file))
      } else if (file !== baseFile && file.endsWith('.js')) {
          const option = require(path.join(__dirname, dir, file))
        commandBase(client, option)
      }
    }
  }

  readCommands('commands')
})

client.login(process.env.token);
