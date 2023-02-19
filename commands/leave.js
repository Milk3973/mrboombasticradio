const Discord = require('discord.js')

module.exports = {
  name: 'leave',
  run: async (client, message) => {
    client.distube.voices.leave(message)
    message.channel.send({
      embeds: [
        new Discord.EmbedBuilder() 
          .setTitle('Mr. Boombastic Has left!') 
          .setDescription(`${client.emotes.success} | I have left your vc!`)
          .setFooter({ text: 'Made By Milk#5173'})
          .setColor('#a560a4')
      ]})
  }
}
