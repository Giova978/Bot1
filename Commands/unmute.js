const Discord = require("discord.js");

module.expors.run = async (bot, message, args) =>{
  if(!message.author.hasPermission("KICK_MEMBERS" || "ADMINISTRATOR" || "BAN_MEMBERS")return message.reply("No eres admin");
  let mRole = message.guild.roles.find(`name`, "muted");
  let user = message.guild.member(message.mentions.users.first() || message.guild.member.get(arg[0]));
  if(!user)return message.reply("Usuario no encontrado");
  user.removeRole(mRole);
}

module.exports.help ={
  name: "unmute"
}
