const Discord = require("discord.js")
const fs = require("fs")
let prefixes = JSON.parse(fs.readFileSync("./prefixes.json", "utf8"));

module.exports.run = async (bot, message, err) =>{
	let prefix = prefixes[message.guild.id].prefixes;

		let Embed = new Discord.RichEmbed()
		.setColor("#17f40c")
		.setDescription("Comandos de Mods")
		.addField("Añadir Rol", `${prefix}adrole <Nombre del rol>`)
		.addField("Remover Rol", `${prefix}rerole <Nombre del rol>`)
		.addField("Ban", `${prefix}ban <@Usuario> <Razón>`)
		.addField("Kick", `${prefix}kick <@Usuario> <Razón>`)
		.addField("Tempmute", `${prefix}tempmute <@Usuario> <Tiempo> <Razón(Opcional)> Ej: ${prefix}tempmute @Usuario 10s Test`)
		.addField("Warn", `${prefix}warn <@Usuario> <Razón>`)
		.addField("Prefix",`${prefix}prefix <Prefix>`)

		let Embed2 = new Discord.RichEmbed()
		.setColor("#17f40c")
		.setDescription("Comandos de Usuarios")
		.addField("8Ball",`${prefix}8ball <Pregunta>`)
		.addField("Ayuda",`${prefix}help`)
		.addField("Reporte",`${prefix}report <@Usuario> <Razón>`)

		let Embed3 = new Discord.RichEmbed()
		.setColor("#ff0000")
		.setDescription("Comandos de <@308352017263493125>")
		.addField("Test",`${prefix}t`)
		.addField("Id",`${prefix}id`)
		.addField("Apagar",`${prefix}shutdown`)
		.addField("Reiniciar",`${prefix}reset (No funciona)`)

		message.channel.send(Embed3);
		message.channel.send(Embed2);
		message.channel.send(Embed);

};

module.exports.help = {
	name: "help"
};
