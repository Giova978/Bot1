const Discord = require("discord.js");
const ms = require("ms");

module.exports.run = async (bot, message, args) => {

  //!tempmute @user 1s/m/h/d
if(!message.member.hasPermission("KICK_MEMBERS" || "ADMINISTRATOR" || "BAN_MEMBERS")) return message.reply("Sueña, LoL");
  let tomute = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
  if(!tomute) return message.reply("Usuario no encontrado");
 // if(tomute.hasPermission("ADMINISTRATOR")) return message.reply("No lo puedes mutear");
  let muterole = message.guild.roles.find(`name`, "muted");
  //start of create role
  if(!muterole){
    try{
      muterole = await message.guild.createRole({
        name: "muted",
        color: "#000000",
        permissions:[]
      })
      message.guild.channels.forEach(async (channel, id) => {
        await channel.overwritePermissions(muterole, {
          SEND_MESSAGES: false,
          ADD_REACTIONS: false
        });
      });
    }catch(e){
      console.log(e.stack);
    }
  }
  //end of create role
  let mutetime = args[1];
  if(!mutetime) return message.reply("No especificaste el tiempo");

  await(tomute.addRole(muterole.id));
  message.reply(`<@${tomute.id}> fue muteado ${ms(ms(mutetime))}`);

  setTimeout(function(){
    tomute.removeRole(muterole.id);
    message.channel.send(`<@${tomute.id}> fue desmuteado`);
  }, ms(mutetime));


//end of module
}

module.exports.help = {
  name: "tempmute"
}
