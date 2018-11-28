const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    let s = message.author.id;
    let u = message.guild.member(message.mentions.users.first()|| message.guild.member.get(args[0]));
//	if(!args[2]) return message.reply("Porfavor has una pregunta completa");
	let rplies = [`<@${s}> se hizo la paja solo.`,`<@${s}> se acerco con perversion a <@${u.id}> y lo tiro a la cama, luego empezó a penetrar con pasión mientras <@${u.id}> gemia.`,`<@${s}> estaba exitado en su cuarto, de repente vino <@${u.id}> y lo observó, este se empezó a relamer y se acerco al miembro de <@${s}> y lo succiono.`,`<@${s}> tiro a <@${u.id}> a la cama y se saco su nepe de 20cm y lo introdujo en su culo, era algo apretado pero placentero.`,`<@${s}> y <@${u.id}> tuvieron una noche de placer haciendo todas las poses.`,`<@${s}> hizo el 69 con <@${u.id}>.`,`<@${s}> fue partido en 2 por la vaganna de <@${u.id}>.`];

	let result = Math.floor((Math.random() * rplies.length));
	//let quest = args.slice(0).join(" ");

  message.channel.send(rplies[result]);

}


module.exports.help = {
	name: "18"
}
