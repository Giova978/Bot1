const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
	if(message.author.id != "308352017263493125")return message.reply("Comando solo de <@308352017263493125>");
let Embed = new Discord.RichEmbed()
.setDescription("Discord ID")
.setColor("#42f44e")
.addField("Tu ID es",message.author.id);

message.channel.send(Embed);
}

module.exports.help = {
	name: "id"
}
