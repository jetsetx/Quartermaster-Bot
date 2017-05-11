const Discord = require('discord.js');
const client = new Discord.Client();

client.login('MzEwNjAzNDI3Mzg0MjYyNjU3.C_Ad_w.9Zr3jYsMMUZTk2y_azxfUVBw_jk');


client.on('ready', () => {
  console.log('I am ready!');
});

client.on('message', message => {
  if (message.content === '!ping') {
    message.reply('pong');
  }
});

client.on('guildMemberAdd', member => {
  member.guild.defaultChannel.send('Welcome to the Guild! Be sure to read our rules in #welcome, and enjoy your stay!');
});

client.on('message', message => {
  if (message.content != '!oss') {
    return;
  }
  message.reply('One Shots & Shots Signup - May: https://goo.gl/forms/bsqcgTm2zwVH69Ar1')
});

client.on('message', message => {
  var tags = message.roles();
  if(message.content === '!tagme'){
  GuildMember.addRole(tags);
  message.reply('You have been added to the following roles:' + tags)
}});
