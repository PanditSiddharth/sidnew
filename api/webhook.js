const Telegraf = require('node-telegram-bot-api');

// Create a new Telegraf bot
const bot = new Telegraf('5177532718:AAHXqlv5YJivAkdghQ97U9MHkVxWAb72sD0');

module.exports = async (req, res) => {
  const { message } = req.body;
  await bot.sendMessage(message.chat.id, 'hi');
  res.status(200).send('Message sent');
};
