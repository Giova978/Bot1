const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {


	if(!args[2]) return message.reply("Porfavor has una pregunta completa");
	let rplies = ["Sí.","No.", "No lo sé.", "Tal vez.", "Pregunta mas tarde."];

	let result = Math.floor((Math.random() * rplies.length));
	let quest = args.slice(0).join(" ");

	let Embed = new Discord.RichEmbed()
	.setAuthor(message.author.tag)
	.setColor("#f71d1d")
	.addField("Pregunta:", quest)
	.addField("Answer", rplies[result]);

	message.channel.send(Embed);

}	


module.exports.help = {
	name: "8ball"
}