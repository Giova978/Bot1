const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

  //if(message.author.id != "308352017263493125")return message.reply(`Comando en pruebas, solo <@308352017263493125>`);
  let sUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
  if(!sUser)return message.reply("Usuario no encontrado");
  if(sUser.id === "308352017263493125")return message.reply("No puedes hacerle eso a mi creador");
  let veces = parseInt(args[1],10);
  if(!veces)return message.reply("Cantidad no especificada");
  if(veces > 99)return message.reply("La cantidad debe ser menor a 99");
  let mensaje = args.join(" ").slice(24);
  if(!mensaje)return message.reply("Mensaje no especificado");

  var i = 0;
  //console.log(i);
  for(i = 0;i < veces;i++) {
    try{
  await sUser.send(mensaje);
}catch{
  message.channel.send(`<@${sUser.id}>,${mensaje}.Tienes los dms bloqueados`);
}
message.reply("Listo, spam echo");
};

};

module.exports.help = {
  name: "spam"
}
