const Discord = require('discord.js')

module.exports = {
  name: 'autoplay',
  aliases: ['ap', 'auto'],
  inVoiceChannel: true,
  run: async (client, message) => {
    const queue = client.distube.getQueue(message)
    if (!queue) {
    message.channel.send({
      embeds: [
        new Discord.EmbedBuilder() 
          .setTitle('Error!') 
          .setDescription(`${client.emotes.error} | There is nothing in the queue right now!`)
          .setFooter({ text: 'Made By Milk#5173'})
          .setColor('#a560a4')
        ]})
      } else {
    const autoplay = queue.toggleAutoplay()
    message.channel.send({
      embeds: [
        new Discord.EmbedBuilder() 
          .setTitle('Autoplay On!') 
          .setDescription(`${client.emotes.success} | AutoPlay: \`${autoplay ? 'On' : 'Off'}\``)
          .setFooter({ text: 'Made By Milk#5173'})
          .setColor('#a560a4')
        ]})
      }
  }
}

