const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {


//	if(!args[2]) return message.reply("Porfavor has una pregunta completa");
	let rplies = ["¡Policía! ¡Hay dos mujeres que se están peleando por mi! ¿Y que problema hay? ¡Pues que va ganando la fea!.","Cariño, creo que estás obsesionado con el fútbol y me haces falta. ¡¿Qué falta?! ¡¿Qué falta?! ¡¡Si no te he tocado!!","Hola guapa, ¿me dices tu teléfono? Un iPhone. Pero el número. El 5."," Soy un tipo saludable. Ah.¿Comes sano y todo eso?. No,la gente me saluda…","¿Cuanto cuesta esta estufa?. 5.000€. Pero, oiga, esto es una estafa. No señor, es una estufa."];//,"No.", "No lo sé.", "Tal vez."];

	let result = Math.floor((Math.random() * rplies.length));
	//let quest = args.slice(0).join(" ");

	let Embed = new Discord.RichEmbed()
	.setAuthor(message.author.tag)
	.setColor("#f71d1d")
	.addField("Chiste", rplies[result]);

	message.channel.send(Embed);

}


module.exports.help = {
	name: "chiste"
}
