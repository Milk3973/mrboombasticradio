const Discord = require('discord.js')

module.exports = {
  name: 'resume',
  aliases: ['resume', 'unpause'],
  inVoiceChannel: true,
  run: async (client, message) => {
    const queue = client.distube.getQueue(message)
    if (!queue) return message.channel.send({
      embeds: [
        new Discord.EmbedBuilder()
          .setTitle('Oops!')
          .setDescription(`${client.emotes.error} | There is nothing in the queue right now!`)
          .setFooter({ text: 'Made By Milk#5173'})
          .setColor('#a560a4')
      ]
    })
    const song = queue.songs[0]
    if (queue.paused) {
      queue.resume()
      message.channel.send({
        embeds: [
          new Discord.EmbedBuilder()
          .setTitle('Song Resumed!')
          .setDescription(`${client.emotes.success} | **\`${song.name}\`** has been resumed.`)
          .setFooter({
            text: 'Made By Milk#5173'
          })
          .setColor('#a560a4')
        ]
      })
    } else {
      message.channel.send({
        embeds: [
          new Discord.EmbedBuilder()
          .setTitle('Song Paused!')
          .setDescription(`${client.emotes.success} | **\`${song.name}\`** is not paused.`)
          .setFooter({
            text: 'Made By Milk#5173'
          })
          .setColor('#a560a4')
        ]
      })
    }
  }
}
