const Discord = require("discord.js");
const fs = require("fs");

module.exports.run = async (bot, message, args) => {

	if(!message.member.hasPermission("ADMINISTRATOR")) return message.reply("Don't Dream");
	if(!args[0] || args[0 == "help"]) return message.reply(`Uso: !prefix <Aqui el nuevo prefix>`);

	let prefixes = JSON.parse(fs.readFileSync("./prefixes.json", "utf8"));

	prefixes[message.guild.id] = {
		prefixes: args[0]
	};

	fs.writeFile("./prefixes.json", JSON.stringify(prefixes),(err)=>{
		if (err) consolo.log(err)
	});

	let Embed = new Discord.RichEmbed()
	.setColor("#17FF00")
	.setTitle("Prefix Set!")
	.setDescription(`Set to ${args[0]}`);

	message.channel.send(Embed)

}

module.exports.help = {
	name: "prefix"
}
