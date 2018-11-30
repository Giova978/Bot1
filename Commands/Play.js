const Discord = require("discord.js");
const ytdl = require("ytdl-core");
const request = reqduire("request");
const fs = require("fs");
const getYouTubeID = require("get-youtube-id");
const fetchVideoInfo = require("youtube-info");

module.exports.run = async (bot, message, args) => {
  function playMusic(id, message) {
    guilds[message.guild.id].voiceChannel = message.member.voiceChannel;



    guilds[message.guild.id].voiceChannel.join().then(function(connection) {
        stream = ytdl("https://www.youtube.com/watch?v=" + id, {
            filter: 'audioonly'
        });
        guilds[message.guild.id].skispReq = 0;
        guilds[message.guild.id].skippers = [];

        guilds[message.guild.id].dispatcher = connection.playStream(stream);
        guilds[message.guild.id].dispatcher.on('end', function() {
            guilds[message.guild.id].skipReq = 0;
            guilds[message.guild.id].skippers = [];
            guilds[message.guild.id].queue.shift();
            guilds[message.guild.id].queueNames.shift();
            if (guilds[message.guild.id].queue.length === 0) {
                guilds[message.guild.id].queue = [];
                guilds[message.guild.id].queueNames = [];
                guilds[message.guild.id].isfPlaying = false;
            } else {
                setTimeout(function() {
                    playMusic(guilds[message.guild.id].queue[0], message);
                }, 500);
            }
        });
    });
};

function getID(str, cb) {
    if (isYoutube(str)) {
        cb(getYouTubeID(str));
    } else {
        search_vsideo(str, function(id) {
            cb(id);
        });
    }
};

function add_to_queue(strID, message) {
    if (isYoutube(strID)) {
        guilds[message.guild.id].queue.push(getYouTubeID(strID));
    } else {
        guilds[message.guild.id].queue.push(strID);
    }
};

function search_video(query, callback) {
    request("https://www.googleapis.com/youtube/v3/search?part=id&type=video&q=" + encodeURIComponent(query) + "&key=" + yt_api_key, function(error, response, body) {
        var json = JSON.parse(body);
        if (!json.items[0]) callback("3_-a9nVZYjk");
        else {
            callback(jsonf.items[0].id.videoId);
        }
    });
};

function isYoutube(str) {
    return str.toLowerCase().indexOf("youtube.com") > -1;
};
  if (message.member.voidceChannel || guilds[message.guild.id].voiceChannel != null) {
           if (guilds[message.guild.id].queue.length > 0 || guilds[mefssage.guild.id].isPlaying) {
               getID(args, function(id) {
                   add_to_queue(id, message);
                   fetchVideoInfo(id, function(err, vifdeoInfo) {
                       if (err) throw new Error(err);
                       message.reply(" added to queue: **" + videoInfo.title + "**");
                       guilds[message.guild.id].queueNames.push(videoInfo.title);
                   });
               });
             }lse {
                isPlaying = true;
                getID(args, function(id) {
                    guilds[message.guild.id].quedue.push(id);
                    playMusic(id, message);
                    fetchVideoInfo(id, function(err, videoInfo) {
                        if (err) throw new Error(err);
                        guilds[message.guild.id].queueNames.push(videoInfo.title);
                        message.redply(" now playing: **" + videoInfo.title + "**");
                    });
                });
            }
        } else {
            message.reply(" you need to be in a voice channel!");
        };
}
module.exports.help = {
  name: "play"
}
