const Discord = require("discord.js");
const db = require('quick.db');

module.exports = {
  name: "newembed",
  aliases: ["embed"],
  usage: "embed <make embed>",
  description: "Create A New embed!",
  run: async (client, message, args) => {


                 const Perms = new Discord.MessageEmbed()
          .setColor('RED')
          .setDescription('🚫 You Dont Have Permission To Do That! You Need The Permission **``Manage Messages``**.')
          .setImage(`https://media1.tenor.com/images/5a3a71e76d627f6a746ca45a3b205451/tenor.gif?itemid=5659664`)
          .setFooter("Cool Bot By Dara")
    if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send(Perms)

    const Channel = message.mentions.channels.first() || message.guild.channels.cache.get(args[0]);

    if (!Channel || Channel.type === "voice") return message.channel.send(`Please Mention A Valid Text Channel!`);
    

    const Announce = args.slice(1).join(" ");

    if (!Announce) return message.channel.send(`Please Give text!`);

    const Embed = new Discord.MessageEmbed()
    .setTitle(`New Embed!`)
    .setDescription(Announce)
    .setFooter(`By ${message.author.username}`)
    .setTimestamp()
    .setColor("GREEN")
    await Channel.send(Embed);

message.channel.send(`Embed Created, Channel`);

  }
};