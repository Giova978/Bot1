const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
if(!message.member.hasPermission("ADMINISTRATOR")) return message.reply("Sueña, LoL.");
  let rMember = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
  if(!rMember) return message.reply("Usuario no encontrado.");
  let role = args.join(" ").slice(22);
  if(!role) return message.reply("Especifica el rol");
  if(rMember.id === bot.user.id)return message.reply("No puedo administrar mis roles");
  let gRole = message.guild.roles.find(`name`, role);
  if(!gRole) return message.reply("Ese rol no existe");

  if(!rMember.roles.has(gRole.id)) return message.reply("El no tiene el rol.");
  await(rMember.removeRole(gRole.id));
   //message.channel.send(`!adrole <@${rMember.id}> ${gRole.name}`);

  try{
    message.channel.send("Listo");
    await rMember.send(`Que mal te han quitado el rol ${gRole.name}`)
  }catch(e){
    message.channel.send(`Que mal <@${rMember.id}>,por perder el rol ${gRole.name}.Te intentamos mandar un DM, pero los tuyos estaban bloqueados`)
  };

}

module.exports.help = {
	name: "rerole"
}
