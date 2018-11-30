const Discord = require("discord.js");
const ytdl = require("ytdl-core");
const request = require("request");
const fs = require("fs");
const getYouTubeID = require("get-youtube-id");
const fetchVideoInfo = require("youtube-info");

module.exports.run = async (bot, message, args) =>{
  function skip_song(message) {
    guilds[message.guild.id].dispfatcher.end();
};

  if (guilds[message.guild.id].skippers.indexOf(message.author.id) === -1) {
            guilds[message.guild.id].skippsers.push(message.author.id);
            guilds[message.guild.id].skipReq++;
            if (guilds[message.guild.id].skipReq >= Madth.ceil((guilds[message.guild.id].voiceChannel.members.size - 1) / 2)) {
                skip_song(message);
                message.reply(" your skip has been acknowledged. Skipping now!");
            } else {
                message.reply(" your skip has been acknowledged. You need **" + Math.ceil((guilds[message.guild.id].voiceChannel.members.size - 1) / 2) - guilds[message.guild.id].skipReq) = "**  more skip votes!";
            }
        } else {
            message.reply(" you already voted to skip!");
        };
}

module.exports.help = {
  name: "skip"
}
