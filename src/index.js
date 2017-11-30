const Discord = require('discord.js');
const client = new Discord.Client();
const deadline = 15
var events = [];
//EVENTS will have 3 properties: Name, Date/Deadline, (optional) link

client.login('xxxxxxxxxxxxxxxxx');


client.on('ready', () => {
  console.log('I am ready!');
});

client.on('message', message => {
  if (message.content === '!ping') {
    message.reply('pong');
  }
});

//client.on('guildMemberAdd', member => {
//  member.guild.defaultChannel.send('Welcome to the Order! Be sure to read our rules in #welcome, and enjoy your stay!');
//});

//OSS needs to 1 - tell what the date is
//3- Tell the user time until signup date.
client.on('message', message => {
  var cmd = '!oss';
  if (message.content.startsWith(cmd)) {
    var now = new Date();
    var current = now.getDate();
    if (current < deadline) {
      message.reply('You have ' + deadline - current + ' days left to sign up!');
      message.reply('Here\'s the link: For now put a link here cuz u suck')
    } else if (current == deadline) {
      message.reply('Today\'s the last day to sign up! Hurry: put a link here dummy')
    } else {
      message.reply('You are unfortunately past the deadline: follow https://twitch.tv/ogmtv to find out when we next go live! See you next month!')
    }
  }
});

//Admin-only Add events
clent.on('message,'
  message => {
    var cmd = '!addevent'
    if (message.content.startsWith(cmd)) {
      if (message.member.hasPermission("ADMINISTRATOR"){
          //add event
          message.reply('great job judy! NOW ADD THE EVENT DUMMY')
        } else {
          message.reply('This is an Admin-only action. Sorry!')
        })
    }
  });
//Admin-only remove events
//Can events expire?

//list of upcoming events


//what roles are in this server?
client.on('message', message => {
  var cmd = "!roles"
  if (message.content.startsWith(cmd)) {
    var roletext = message.guild.roles();
    message.reply('Here are applicable roles: ' + roletext)
  }
});

//give client a role
client.on('message', message => {
  var cmd = "!roleme"
  if (message.content.startsWith(cmd)) {
    var rolenick = message.content.slice(cmd.length + 1);
    var roleobj = message.guild.roles.find("name", rolenick);
    var result = message.member.addRole(roleobj);
    result.then(() => message.reply(message.member.nickname + ', you have been added to the following roles: ' + roleme), () => message.reply('I am sorry, ' + message.member.nickname + ', I believe I cannot do that. Try again!'));
  }
});
