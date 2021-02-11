
module.exports = {
  name: "unmute",
  aliases: [],
  usage: "unmute <member>",
  description: "unmute a member",
  run: async (client, message, args) => {
    const target = message.mentions.users.first();
    if(target){
     let mainRole = message.guild.roles.cache.find(role => role.name === 'Member')
     let muteRole = message.guild.roles.cache.find(role => role.name === 'mute')



     let memberTarget= message.guild.members.cache.get(target.id);

     memberTarget.roles.add(mainRole.id)
     memberTarget.roles.remove(muteRole.id)
     message.channel.send(`<@${memberTarget.user.id}> has been unmuted`)

     } else{
      message.channel.send('I Cannot Find That Member')
    }
 }
}