const Discord = require('discord.js')

module.exports = {
  name: 'pause',
  aliases: ['pause', 'pp'],
  inVoiceChannel: true,
  run: async (client, message) => {
    const queue = client.distube.getQueue(message)
    if (!queue) {
      message.channel.send({
        embeds: [
          new Discord.EmbedBuilder()
          .setTitle('Error!')
          .setDescription(`${client.emotes.error} | There is nothing in the queue right now!`)
          .setFooter({
            text: 'Made By Milk#5173'
          })
          .setColor('#a560a4')
        ]
      })
    } else {
      const song = queue.songs[0]
      if (queue.paused) {
        queue.resume()
        message.channel.send({
          embeds: [
            new Discord.EmbedBuilder()
            .setTitle('Song Resumed')
            .setDescription(`${client.emotes.success} | **\`${song.name}\`** has been resumed.`)
            .setFooter({
              text: 'Made By Milk#5173'
            })
            .setColor('#a560a4')
          ]
        })
      } else {
        queue.pause()
        message.channel.send({
          embeds: [
            new Discord.EmbedBuilder()
            .setTitle('Song Paused')
            .setDescription(`${client.emotes.success} | **\`${song.name}\`** has been Paused.`)
            .setFooter({
              text: 'Made By Milk#5173'
            })
            .setColor('#a560a4')
          ]
        })
      }
    }
  }
}