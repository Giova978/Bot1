const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
		if(message.author.id != "308352017263493125")return message.reply("Comando solo de <@308352017263493125>");
message.channel.send(`${bot.user.id} esa es mi id`)
}

module.exports.help = {
	name: "t"
}
