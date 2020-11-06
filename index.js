const Discord = require('discord.js');
const secrets = require('./secrets.json');
const { prefix } = require('./config.json');

const client = new Discord.Client();

client.once('ready', () => {
  console.log('Ready!');
});

client.login(secrets.BOT_TOKEN);

client.on('message', (message) => {
  if (message.content === `${prefix}help`) {
    message.channel.send(`Bot Command List:
.ping
ping
.server
.moreinfo
.userinfo
.quoteme`);
  } else if (message.content === `${prefix}ping`) {
    message.channel.send('Pong');
  } else if (message.content === 'ping') {
    message.channel.send('Talk with me in dots');
  } else if (message.content === `${prefix}server`) {
    message.channel.send(
      `Server details:\nName : ${message.guild.name}\nType \`${prefix}moreinfo\` for more information`,
    );
  } else if (message.content === `${prefix}moreinfo`) {
    message.channel.send(`Server details:
Name : ${message.guild.name}
Name Acronym: ${message.guild.nameAcronym}
Total Members: ${message.guild.memberCount}
Created At: ${message.guild.createdAt}
Region: ${message.guild.region}
`);
  } else if (message.content === `${prefix}userinfo`) {
    message.channel.send(`Your Username: ${message.author.username}\nYour ID: ${message.author.id}`);
  } else if (message.content.startsWith(`${prefix}quoteme`)) {
    message.channel.send(`\`${message.content.substring(9)}\``);
  }
});
