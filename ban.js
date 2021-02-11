const Discord = require("discord.js");
const db = require('quick.db');

module.exports = {
  name: "ban",
  aliases: [],
  usage: "ban <member>",
  description: "ban a member",
  run: async (client, message, args) => {





       if(!message.member.hasPermission('BAN_MEMBERS')) {

          const BanPerms = new Discord.MessageEmbed()
          .setColor("RED")
          .setDescription('**You Do Not Have Permission To Do That!**')
          .setImage("https://media3.giphy.com/media/RhrAi0KejGlYbpanuQ/giphy.gif?cid=ecf05e47563sr5p1cxymspmft3gv4rbx6f1c47gfg0wpuy4y&rid=giphy.gif")
          .setFooter("Cool Bot By Dara")




            message.channel.send(BanPerms);
            return;
        };





        
        let mentionMemberBan = message.mentions.members.first();
        
        if(!mentionMemberBan) {

          const Banmention = new Discord.MessageEmbed()
          .setColor("RED")
          .setDescription('**You Need To Mention A Member!**')
          .setImage("https://media.giphy.com/media/H70CI64uoSKxLkwoCL/giphy.gif")
          .setFooter("Cool Bot By Dara")





            message.channel.send(Banmention);
            return;
        }

        








        
        if(!mentionMemberBan.kickable) {

          const BanbotPerms = new Discord.MessageEmbed()
          .setColor("RED")
          .setDescription('**I Do Not Have Permission To Ban That Member!**')
          .setImage("https://media3.giphy.com/media/RhrAi0KejGlYbpanuQ/giphy.gif?cid=ecf05e47563sr5p1cxymspmft3gv4rbx6f1c47gfg0wpuy4y&rid=giphy.gif")
          .setFooter("Cool Bot By Dara")



            message.channel.send(BanbotPerms);
            return
        };






        
        mentionMemberBan.ban()
            .then(() => console.log(`Banned ${mentionMemberBan.displayName}`))


            const BanWork = new Discord.MessageEmbed()
            .setDescription('**Member Banned!**')
            .setColor("GREEN")
            .setImage("https://emoji.gg/assets/emoji/4889_Banned.gif")
            .setFooter("Cool Bot By Dara")





            message.channel.send(BanWork)
            .catch(console.error);

  } 
  }                         