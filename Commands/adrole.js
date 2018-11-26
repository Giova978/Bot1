const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

  //!addrole @andrew Dog Person
  if(!message.member.hasPermission("ADMINISTRATOR")) return message.reply("Sueña, LoL.");
  let rMember = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
  if(!rMember) return message.reply("Usuario no encontrado.");
  let role = args.join(" ").slice(22);
  if(!role) return message.reply("Especifica el rol");
  let gRole = message.guild.roles.find(`name`, role);
  if(!gRole) return message.reply("No existe ese rol.");

  if(rMember.roles.has(gRole.id)) return message.reply("El ya tiene el rol.");
  await(rMember.addRole(gRole.id));

  try{
    message.channel.send("Listo");
    await rMember.send(`Felicidades se te ha concedido el rol ${gRole.name}`)
  }catch(e){
    message.channel.send(`Felicidades <@${rMember.id}>,por obtener el rol ${gRole.name}.Te intentamos mandar un DM, pero los tuyos estaban bloqueados`)
  }
}

module.exports.help = {
  name: "adrole"
}
