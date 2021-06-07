const express = require('express');
const app = express();

app.get('/', (req, res) => res.send('Bot Online! ✅'));

const { Client, MessageEmbed } = require('discord.js');
const client = new Client();
const Discord = require("discord.js");
const bot = new Client();

client.on('ready', ready => {
  console.log('Managing ' + client.user.tag + '\n Prefix is:' + botPrefix)
})

//Bot code here:


client.login(DISCORD_TOKEN)
