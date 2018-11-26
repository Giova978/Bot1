const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {


 	//!report @user reason
 	let rUser = message.guild.member(message.mentions.users.first()|| message.guild.member.get(args[0]));
 	if(!rUser) return message.channel.send("Usuario no encontrado");
 	let reason = args.join(" ").slice(22);

	let rEmbed = new Discord.RichEmbed()
	.setDescription("Reporte")
	.setColor("#f71d1d") 
	.addField("Usuario reportado", `${rUser} con la ID: ${rUser.id}`)
	.addField("Razón", `${reason}`)
	.addField("Reportado por", `${message.author} con la ID: ${message.author.id}`)
	.addField("En el canal", message.channel)
	.addField("El", message.createdAt);
let outchannel = message.guild.channels.find(`name`, "bot-output")
	outchannel.send(rEmbed)
return;
 };


module.exports.help = {
	name: "report"
}