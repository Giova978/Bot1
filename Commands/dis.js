const Discord = require("discord.js");
const ytdl = require("ytdl-core");
const request = require("request");
const fs = require("fs");
const getYouTubeID = require("get-youtube-id");
const fetchVideoInfo = require("youtube-info");
const botconfig = require("../botconfig.json");
const safeJsonStringify = require('safe-json-stringify');
let yt_api_key = botconfig.yt_api_key;
//let guilds = JSON.parse(fs.readFileSync("./guild.json", "utf8"));

module.exports.run = async (bot, message, args,guilds) => {
    message.guild.voiceConnection.disconnect();
}

module.exports.help = {
    name: "disconnect"
}