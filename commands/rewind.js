const Discord = require('discord.js')

module.exports = {
  name: 'rewind',
  inVoiceChannel: true,
  run: async (client, message, args) => {
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
    if (!args[0]) {
      return message.channel.send({
        embeds: [
          new Discord.EmbedBuilder()
          .setTitle('Seconds Needed!')
          .setDescription(`${client.emotes.error} | Please provide time (in seconds) to go rewind!`)
          .setFooter({ text: 'Made By Milk#5173'})
          .setColor('#a560a4')
        ]
      })
    }
    const time = Number(args[0])
    if (isNaN(time)) return message.channel.send({
      embeds: [
        new Discord.EmbedBuilder()
          .setTitle('Invalid Number')
          .setDescription(`${client.emotes.error} | Please provide time (in seconds) to go rewind!`)
          .setFooter({ text: 'Made By Milk#5173'})
          .setColor('#a560a4')
      ]
    })
    queue.seek((queue.currentTime - time))
    const song = queue.songs[0]
    message.channel.send({
      embeds: [
        new Discord.EmbedBuilder()
          .setTitle('Successfully Rewinded')
          .setDescription(`${client.emotes.success} | Rewinded **\`${song.name}\`** for ${time} seconds.`)
          .setFooter({ text: 'Made By Milk#5173'})
          .setColor('#a560a4')
      ]
    })
  }
}
