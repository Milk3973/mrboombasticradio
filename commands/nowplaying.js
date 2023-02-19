const Discord = require('discord.js')

module.exports = {
  name: 'nowplaying',
  aliases: ['np'],
  inVoiceChannel: true,
  run: async (client, message, args) => {
    const queue = client.distube.getQueue(message)
    if (!queue) return message.channel.send({
      embeds: [
        new Discord.EmbedBuilder()
        .setTitle('Oops!')
        .setDescription(`${client.emotes.error} | There is nothing in the queue right now!`)
        .setFooter({ text: 'Made By Milk#5173'})
        .setColor('#a560a4')
      ]})
    const song = queue.songs[0]
    message.channel.send({
      embeds: [
        new Discord.EmbedBuilder()
        .setTitle('Now Playing')
        .setDescription(`${client.emotes.play} | **\`${song.name}\`**`)
        .setFooter({ text: 'Made By Milk#5173'})
        .setColor('#a560a4')
      ]
    })
  }
}
