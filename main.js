require ('module-alias/register')

const path = require('path')
const fs = require('fs')
const Discord = require('discord.js')
var moment = require('moment');

const { Client } = require('discord.js');
const client = new Client({ partials: ['MESSAGE', 'CHANNEL', 'REACTION'] });

const ms = require ('ms')
const prompt = require('prompt')
const mongo = require('@features/util/mongo')

const loadCommands = require('@root/commands/load-commands')
const loadFeatures = require('@root/features/load-features')

loadCommands(client)
loadFeatures(client)

client.on('ready', async () => {
  
  console.log('The client is ready!')
  
  await mongo()

  client.user.setActivity(`How to be a bot`); 
})

client.on("ready", function() {
  setInterval(function() {
    console.log('Still awake')
  }, 300000)
});

client.login(process.env.token);
