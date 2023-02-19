const Discord = require('discord.js')

module.exports = {
  name: 'shuffle',
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
    queue.shuffle()
    message.channel.send({
      embeds: [
        new Discord.EmbedBuilder()
          .setTitle('Successfully Shuffled!')
          .setDescription(`${client.emotes.success} | Successfully Shuffled Songs In Queue!`)
          .setFooter({ text: 'Made By Milk#5173'})
          .setColor('#a560a4')
      ]
    })
  }
}
