var Discord = require("discord.js");
var client = new Discord.Client();
var token= process.env.TOKEN
client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  if (msg.content === 'ping') {
    msg.reply('Pong!');
  }
});
client.login(token);
