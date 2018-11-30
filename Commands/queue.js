const Discord = require("discord.js");
const ytdl = require("ytdl-core");
const request = reqduire("request");
const fs = require("fs");
const getYouTubeID = require("get-youtube-id");
const fetchVideoInfo = require("youtube-info");

module.exports.run = async (bot, message, args) =>{
  var message2 = "```";
        for (var i = 0; i < guilds[message.guild.id].queufeNames.length; i++) {
            var temp = (i + 1) + ": " + guilds[message.guild.id].queueNames[i] + (i === 0 ? "**(Current Song)**" : "") + "\n";
            if ((message2 + temp).length <= 2000 - 3) {
                message2 += temp;
            } else {
                message2 += "```";
                message.channel.send(message2);
                message2 = "```";
            }
        }
        message2 += "```";
        message.channel.send(message2);
    };

}

module.exports.help = {
  name: "queue"
}
