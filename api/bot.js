const { Telegraf } = require('telegraf');
const { message } = require('telegraf/filters');

const bot = new Telegraf('5177532718:AAHVR1SJotCzH-Wg9iDwYQ50FfqGCtPVZdo');

module.exports = async (request, response) => {
  try {

    // const keyboard = [
    //   [{ text: 'Option 1', callback_data: '1' }, { text: 'Option 2', callback_data: '2' }],
    //   [{ text: 'Option 3', callback_data: '3' }, { text: 'Option 4', callback_data: '4' }]
    // ];
    // const reply_markup = {
    //   inline_keyboard: keyboard
    // };

    // bot.command('btn', async (ctx) => await ctx.telegram.sendMessage(
    //   ctx.message.chat.id,
    //   'Like?',
    //   { reply_markup })
    // )

    // bot.action('1', (ctx) => ctx.editMessageText('🎉 Awesome! 🎉'))
    // bot.action('2', (ctx) => ctx.editMessageText('okey2'))
    // bot.action('3', (ctx) => ctx.editMessageText('okey3'))
    // bot.action('4', (ctx) => ctx.editMessageText('okey4'))

    // bot.command('quit', async (ctx) => {
    //   // Explicit usage
    //   await ctx.telegram.leaveChat(ctx.message.chat.id);

    //   // Using context shortcut
    //   await ctx.leaveChat();
    // });

    // Explicit usage
    await ctx.telegram.sendMessage(ctx.message.chat.id, `Hello`);

    // bot.on('callback_query', async (ctx) => {
    //   // Explicit usage
    //   await ctx.telegram.answerCbQuery(ctx.callbackQuery.id);

    //   // Using context shortcut
    //   await ctx.answerCbQuery();
    // });

    // bot.on('inline_query', async (ctx) => {
    //   const result = [];
    //   // Explicit usage
    //   await ctx.telegram.answerInlineQuery(ctx.inlineQuery.id, result);

    //   // Using context shortcut
    //   await ctx.answerInlineQuery(result);
    // });

  }
  catch (error) {
    console.error('Error sending message');
  }

  response.send('OK');
};
