//Kinesys Node.js Twitch Bot.js
const tmi = require('tmi.js');

const opts = {
  identity: {
    username: process.env.BOT_USERNAME,
    password: process.env.OAUTH_TOKEN
  },
  channels: [
    process.env.CHANNEL_NAME
  ]
};

const client = new tmi.client(opts);

client.on('message', onMessageHandler);
client.on('connected', onConnectedHandler);

client.connect();

function onMessageHandler(target, context, msg, self) 
{
   if (self) { return; } // 봇에 의한 메세지는 무시한다.
    // 채팅 메세지의 빈 공간(스페이스)을 trim 한다.
const commandName = msg.trim(); // 명령어를 받고 처리합시다.
 if (/안녕|안뇽|ㅎㅇ/.test(commandName)) {
      const num = rollDice();
client.say(target, `${context['display-name']}님 안녕하세요`);   
}
}
