const Discord = require("discord.js");
const fs = require("fs");
const ms = require("ms");
let warns = JSON.parse(fs.readFileSync("./warnings.json", "utf8"));

module.exports.run = async (bot, message, args) => {


	if(!message.member.hasPermission("BAN_MEMBERS" || "KICK_MEMBERS")) return message.reply("No puedes hacer eso");
	let wUser = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
	if(!wUser) return message.reply("Usuario no encontrado");
	//if(wUser.hasPermission("ADMINISTRATOR")) return message.reply(`<@${wUser.id}> es demasiado poderoso D:`);
	let reason = args.join(" ").slice(22);

	if(!warns[wUser.id]) warns[wUser.id] = {
		warns: 0
	}

	warns[wUser.id].warns++;

	fs.writeFile("./warnings.json", JSON.stringify(warns), (err) =>{
		if(err)  console.log(err);

	});

	let warnE = new Discord.RichEmbed()
	.setDescription("Advertencia")
	.setAuthor(message.author.username)
	.setColor("42f44e")
	.addField("Usuario advertido", `<@${wUser.id}>`)
	.addField("Advertido en el canal", message.channel)
	.addField("Historial del usuario", warns[wUser.id].warns)
	.addField("Razón", reason);

let warnC = message.guild.channels.find(`name`, "bot-output");
if(!warnC) return message.reply("Canal no encontrado");

 warnC.send(warnE);

 if(warns[wUser.id].warns >= 2){
 	let muterole = message.guild.roles.find(`name`,"muted");
 	if(!muterole) return message.reply("Debes crear el rol");

 	let	muteT = "10m";
 	await(wUser.addRole(muterole.id));
 	message.channel.send(`<@${wUser.id}> fue temporalmente muteado`);

 	setTimeout(function(){
 		wUser.removeRole(muterole.id)
 		warnC.send(`<@${wUser.id}> fue desmuteado`)
 	}, ms(muteT))



 }if(warns[wUser.id].warns ==2 ){

 }
}

module.exports.help = {
	name: "warn"
}
