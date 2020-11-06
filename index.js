const Discord = require('discord.js');
const secrets = require('./secrets.json');
const { prefix } = require('./config.json');

const client = new Discord.Client();

client.once('ready', () => {
  console.log('Ready!');
});

client.login(secrets.BOT_TOKEN);

client.on('message', (message) => {
  if (message.content === `${prefix}ping`) {
    message.channel.send('Pong');
  } else if (message.content === 'ping') {
    message.channel.send('Talk with me in dots');
  }
});
