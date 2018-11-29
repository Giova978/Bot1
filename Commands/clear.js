const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

  if(!message.member.hasPermission("MANAGE_MESSAGES"))return message.reply("Sueña, lol");
  if(!args[0])return message.channel.send("Especifica la cantidad");
  message.channel.bulkDelete(args[0]).then(() =>
message.channel.send(`Eliminados ${args[0]} mensajes`));
message.channel.bulkDelete(1);
//message.delete().catch();
}

module.exports.help = {
  name: "clear"
}
