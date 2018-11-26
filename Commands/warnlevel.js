const Discord = require("discord.js");
const fs = require("fs");
const ms = require("ms");
let warns = JSON.parse(fs.readFileSync("./warnings.json", "utf8"));

module.exports.run = async (bot, message, args) => {


	if(!message.member.hasPermission("ADMINISTRATOR")) return message.reply("No puedes hacer eso");
	let wUser = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
	if(!wUser) return message.reply("Usuario no encontrado");
	let warnlevel = warns[wUser.id].warns;

message.reply(`<@${wUser.id}> tiene ${warnlevel} advertencia`);
}
module.exports.help ={
	name: "warnlevel"
}