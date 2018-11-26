const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
message.channel.send("Apgando...");
bot.destroy();
}

module.exports.help = {
  name: "shutdown"
}
