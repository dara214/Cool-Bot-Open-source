const Discord = require("discord.js");
const db = require('quick.db');



module.exports = {
  name: "warnings",
  aliases: [],
  usage: "warnings",
  description: "see warnings",
  run: async (client, message, args) => {


    const warnings = db.fetch(`warns_${message.author}`)


    const embed1 = new Discord.MessageEmbed()
      .setColor("RED")
      .setDescription("**You have no warnings!**")
      .setFooter("Cool Bot By dara")

    if (warnings < 1) return message.channel.send(embed1);

    const embed = new Discord.MessageEmbed()
      .setTitle(`${message.author.username}'s Warns`)
      .setDescription(`**Warnings: ${warnings}**`)
      .setFooter("Cool Bot By dara")

    message.channel.send(embed)


  }
}