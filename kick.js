const Discord = require("discord.js");
const db = require('quick.db');

module.exports = {
  name: "kick",
  aliases: [],
  usage: "kick <member>",
  description: "kick a member",
  run: async (client, message, args) => {




        if(!message.member.hasPermission('KICK_MEMBERS')) {

          const KickPerms = new Discord.MessageEmbed()
          .setColor("Grey")
          .setDescription('**You Do Not Have Permission To Do That!**')
          .setFooter("Cool Bot By Dara")




            message.channel.send(KickPerms);
            return;
        };





        
        let mentionMemberKick = message.mentions.members.first();
        
        if(!mentionMemberKick) {

          const Kickmention = new Discord.MessageEmbed()
          .setColor("RED")
          .setDescription('**You Need To Mention A Member!**')
          .setFooter("Cool Bot By Dara")






            message.channel.send(Kickmention);
            return;
        }

        








        
        if(!mentionMemberKick.kickable) {

          const KickbotPerms = new Discord.MessageEmbed()
          .setColor("RED")
          .setDescription('**I Do Not Have Permission To Kick That Member!**')
          .setFooter("Cool Bot By Dara")



            message.channel.send(KickbotPerms);
            return
        };






        
        mentionMemberKick.kick()
            .then(() => console.log(`Kicked ${mentionMemberKick.displayName}`))


            const KickWork = new Discord.MessageEmbed()
            .setDescription('**Member Kicked!**')
            .setColor("GREEN")
            .setFooter("Cool Bot By Dara")
            





            message.channel.send(KickWork)
            .catch(console.error);



  }
}