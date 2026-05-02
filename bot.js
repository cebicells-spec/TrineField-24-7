const mineflayer = require('mineflayer');
const bot = mineflayer.createBot({
  host: 'TrineMace.aternos.me',
  port: 31986,
  username: 'TrineField',
  version: '26.1'
});

bot.on('login', () => console.log('Bot connected'));
bot.on('kicked', (reason) => console.log('Kicked:', reason));
bot.on('error', (err) => console.log('Error:', err));

// Auto-reconnect on disconnect
bot.on('end', () => {
  setTimeout(() => {
    bot.createBot({ host: 'TrineMace.aternos.me', port: 31986, username: 'TrineField', version: '26.1' });
  }, 5000);
});   
