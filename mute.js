const Discord = require("discord.js");
const ms = require('ms');


module.exports = {
  name: "mute",
  aliases: [],
  usage: "mute <member>",
  description: "mute a member",
  run: async (client, message, args) => {

  let timer = args[1];
let reason = args[2]

    let channel = client.channels.cache.get("805217663697158204");
message.delete();
const role1 = message.guild.roles.cache.find(
 (role) => role.name === `Mute`);

const role2 = message.guild.roles.cache.find(
 (role) => role.name === `M | Member`);

          const embed1 = new Discord.MessageEmbed()
          .setColor("RED")
          .setDescription('**You Do Not Have Permission To Do That!**')


 if(!message.member.hasPermission('MUTE_MEMBERS')) return message.channel.send(embed1);


 const member = message.mentions.members.first();

const embed2 = new Discord.MessageEmbed()
.setColor("RED")
.setDescription("**Please Mention A User!**")

 if (!member) return message.channel.send(embed2);

            

            const PleaseEnter = new Discord.MessageEmbed()
.setColor("RED")
.setDescription("**Please enter a time period followed by \"s or m or h\".**")
  if (!timer) return message.channel.send(PleaseEnter);



timer = Number(timer) * 1000 || ms(timer);

 const PleaseEnterN = new Discord.MessageEmbed()
.setColor("RED")
.setDescription("**Please enter a time!**")
  if (isNaN(timer)) return message.reply(PleaseEnterN);



    const High = new Discord.MessageEmbed()
.setColor("RED")
.setDescription("**I cant remember something for that long!**")
  if (timer > 2147483647) return message.reply(High);

 const Past = new Discord.MessageEmbed()
.setColor("RED")
.setDescription("**I can't unmute a user in the past!**")
  if (timer < 0) return message.reply(Past)


 const Reasonno = new Discord.MessageEmbed()
          .setColor("RED")
          .setDescription('**Please enter a reason for the mute!**')

if (!reason) return message.channel.send(Reasonno);

    const Seta = new Discord.MessageEmbed()
.setDescription(`**You have been muted!**\n**Reason: ${reason}**\n**Time:** ` + ms(timer, { long: true }))


const Setb = new Discord.MessageEmbed()
.setDescription(`**Muted ${member}!**\n**Reason: ${reason}**\n**Time:** ` + ms(timer, { long: true }))

const Setc = new Discord.MessageEmbed()
.setDescription(`**Muted ${member}!**\n**Reason: ${reason}**\n**Staff: ${message.author}**\n**Time:** ` + ms(timer, { long: true }))

member.roles.add(role1)
member.roles.remove(role2)

message.channel.send(Setb)
member.send(Seta)
channel.send(Setc)


setTimeout(() => {
     const Done = new Discord.MessageEmbed()
.setDescription("**You have been unmuted**")


const Done2 = new Discord.MessageEmbed()
.setDescription(`**${member} has been unmuted**`)
channel.send(Done2)
member.send(Done)
member.roles.remove(role1)
member.roles.add(role2)


  }, timer);








  }
}   