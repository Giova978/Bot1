const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
	if(!message.member.hasPermission("BAN_MEMBERS" || "ADMINISTRATOR"))return message.channel.send("No puedes hacer eso");
	let bUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
if(!bUser) return message.channel.send("Can't find user!");
let bReason = args.join(" ").slice(22);
	let outchannel = message.guild.channels.find(`name`, "bot-output")
	let bEmebed = new Discord.RichEmbed()
	.setDescription("Ban")
	.setColor("#f71d1d")
	.addField("Usuario baneado", `${bUser} ID:${bUser.id}`)
	.addField("Baneado por", `<@${message.author.id}>`)
	.addField("El", message.createdAt)
	.addField("Razón", bReason);

	message.guild.member(bUser).ban(bReason)
	outchannel.send(bEmebed)
}

module.exports.help = {
	name: "ban"
}
