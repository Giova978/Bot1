const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
message.channel.send("Reiniciando...");
bot.destroy();
bot.login(prcess.env.BOT_TOKEN);
message.channel.send("Reiniciado ;D");
}

module.exports.help ={
  name: "reset"
};
