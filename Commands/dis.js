const Discord = require("discord.js");
const botconfig = require("../botconfig.json");

module.exports.run = async (bot, message, args,guilds) => {
    if(message.guild.voiceConnection){
    message.guild.voiceConnection.disconnect();
    };
}

module.exports.help = {
    name: "disconnect"
}