const Discord = require('discord.js')

module.exports = {
  name: 'previous',
  inVoiceChannel: true,
  run: async (client, message) => {
    const queue = client.distube.getQueue(message)
    if (!queue) return message.channel.send({
      embeds: [
        new Discord.EmbedBuilder()
          .setTitle('Uh Oh!')
          .setDescription(`${client.emotes.error} | There is nothing in the queue right now!`)
          .setFooter({ text: 'Made By Milk#5173'})
          .setColor('#a560a4')
      ]
    })
    const song = queue.previous()
    message.channel.send({
      embeds: [
        new Discord.EmbedBuilder()
          .setTitle('Playing Previous Song')
          .setDescription(`${client.emotes.success} | Now playing:\n${song.name}`)
          .setFooter({ text: 'Made By Milk#5173'})
          .setColor('#a560a4')
        ]
      })
  }
}
