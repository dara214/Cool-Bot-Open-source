const Discord = require("discord.js");
const db = require('quick.db');


module.exports = {
  name: "warn",
  aliases: [],
  usage: "warn <member> reason",
  description: "warn someone",
  run: async (client, message, array) => {

const reason = array.slice(2)
const user = message.mentions.members.first();

  const embed3 = new Discord.MessageEmbed()
          .setColor("RED")
          .setDescription('**You Do Not Have Permission To Do That!**')
          .setFooter("Cool Bot By dara")

if(!message.member.hasPermission('MUTE_MEMBERS')) return message.channel.send(embed3);

        
        

const embed1 = new Discord.MessageEmbed()
.setColor("RED")
.setDescription("**Please mention a user!**")
.setFooter("Cool Bot By dara")

if (!user) return message.channel.send(embed1);

const Noreason = new Discord.MessageEmbed()
        .setColor("RED")
        .setDescription("**Please give a reason!**")
        .setFooter("New Frontier")
if (!reason) return message.channel.send(Noreason);

message.delete();
db.add(`warns_${user}`, 1)

const embed2 = new Discord.MessageEmbed()
.setDescription(`**${user} was warned!**\n**Reason: ${reason}**`)
.setFooter("Cool Bot By dara")
message.channel.send(embed2)

const warns = db.fetch(`warns_${user}`)

if (warns > 2) {
  const member = message.guild.roles.cache.find(
 (role) => role.name === 'Discord Discussion Member'
);

const mute = message.guild.roles.cache.find(
 (role) => role.name === 'Muted'
);

user.roles.add(mute)
user.roles.remove(member)
db.delete(`warns_${user}`)

}

  }
}
