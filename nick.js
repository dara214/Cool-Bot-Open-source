const Discord = require("discord.js");
const db = require('quick.db');




module.exports = {
  name: "nickname",
  aliases: ["nick"],
  usage: "nickname <name>",
  description: "change the bots nickname",
  run: async (client, message, args) => {


    const invalidEmbed = new Discord.MessageEmbed()
            .setAuthor("Nickname Change Command", client.user.displayAvatarURL({
                format: "png",
                dynamic: true,
                size: 2048
            }))
            .setColor("RED")
            .setTitle("Invalid Arguments")
            .setFooter("Cool Bot By Dara")
            .addFields({
                name: "USAGE",
                value: "```nick <user mention> <nickname>```"
            });

        function invalid(reason) {
            message.channel.send(
                new Discord.MessageEmbed(invalidEmbed)
                    .setTitle((reason)? reason : "Invalid Arguments")
                    .setFooter("Cool Bot By Dara")
            );
        }

        if (!message.member.hasPermission("MANAGE_NICKNAMES")) return message.channel.send("🚫 You don't have permission to perform this command.The premission needed is ``Manage Nicknames``");
        

                
        let member = message.mentions.members.first() || message.guild.members.cache.get(args[0]);
        if (!member) return invalid("🚫 You need to mention a user!");
            
        let nick = args.slice(1).join(" ");
        if (!nick) return invalid("🚫 You need to input the nickname!");

        let messages = [];

        await member.setNickname(nick).then(() => {
            messages.push({
                message: `✅ Successfully changed **${member.user.username}**#${member.user.discriminator}'s nickname to **${nick}**`,
                type: "success"
            });
        }).catch(err => {
            messages.push({
                message: `🚫 Unable to change nickname for **${member.user.username}**#${member.user.discriminator}`,
                type: "error"
            });
        });

        const colorRanking = [
            {
                name: "success",
                color: "GREEN"
            },
            {
                name: "warning",
                color: "YELLOW"
            },
            {
                name: "error",
                color: "RED"
            }
        ];

        const embedColor = messages.reduce((color, message) => {
            const messageColorRank = colorRanking.findIndex(color => color.name === message.type);
            const currentColorRank = colorRanking.findIndex(color => color === color);

            if (messageColorRank > currentColorRank) color = colorRanking[messageColorRank].color;

            return color;
        }, "#10de47");
                
        const successEmbed = new Discord.MessageEmbed()
            .setColor(embedColor)
            .setDescription(messages.map(message => message.message));
        
        message.channel.send(successEmbed)






  }
}
