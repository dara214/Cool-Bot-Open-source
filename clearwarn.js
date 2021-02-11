const Discord = require("discord.js");
const db = require('quick.db');


module.exports = {
  name: "clearwarn",
  aliases: ["cw"],
  usage: "clearwarn <member>",
  description: "clearwarn someone",
  run: async (client, message, args) => {


const user = message.mentions.members.first();

  const embed2 = new Discord.MessageEmbed()
          .setColor("RED")
          .setDescription('**You Do Not Have Permission To Do That!**')
          .setFooter("Cool Bot By Dara")
if(!message.member.hasPermission('MUTE_MEMBERS')) return message.channel.send(embed2);

        


const embed1 = new Discord.MessageEmbed()
.setColor("RED")
.setDescription("**Please mention a user!**")
.setFooter("Cool Bot By Dara")
if (!user) return message.channel.send(embed1);

const number = args[1]

db.delete(`warns_${user}`)


const embed3 = new Discord.MessageEmbed()
.setDescription(`**Deleted warnings from ${user}!**`)
.setFooter("Cool Bot By Dara")

message.channel.send(embed3)
  }
}