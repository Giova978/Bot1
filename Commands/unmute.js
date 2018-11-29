const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  if(!message.member.hasPermission("KICK_MEMBERS" || "ADMINISTRATOR" || "BAN_MEMBERS"))return message.reply("No eres admin");
  let mRole = message.guild.roles.find(`name`, "muted");
  let user = message.guild.member(message.mentions.users.first() || message.guild.member.get(arg[0]));
  if(!user)return message.reply("Usuario no encontrado");
  if(!user.roles.has(mRole.id))return message.reply("No esta muteado");
  user.removeRole(mRole);
  message.reply("Listo, usuario desmuteado");
}

module.exports.help = {
  name: "unmute"
}
