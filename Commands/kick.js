const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
	if(!message.member.hasPermission("KICK_MEMBERS" || "ADMINISTRATOR" || "BAN_MEMBERS"))return message.channel.send("No puedes hacer eso");
	let kUser =message.guild.member(message.mentions.users.first()|| message.guild.member.get(args[0]));
	if(!kUser) return message.channel.send("El Usuario no existe D:");
	let kReason = args.join(" ").slice(22);

//if(kUser.member.hasPermission("KICK_MEMBERS" || "ADMINISTRATOR" || "BAN_MEMBERS")) return message.reply("Sueña, LoL");
	let kEmebed = new Discord.RichEmbed()
	.setDescription("Kick")
	.setColor("#f71d1d")
	.addField("Usuario expulsado", `${kUser} ID:${kUser.id}`)
	.addField("Expulsado por", `<@${message.author.id}>`)
	.addField("El", message.createdAt)
	.addField("Razón", kReason);
let outchannel = message.guild.channels.find(`name`, "bot-output")
message.guild.member(kUser).kick(kReason)
outchannel.send(kEmebed)

}
module.exports.help = {
	name: "kick"
}
