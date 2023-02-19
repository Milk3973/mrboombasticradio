const Discord = require('discord.js')

module.exports = {
  name: 'skip',
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
    try {
      const song = await queue.skip()
      message.channel.send({
        embeds: [
          new Discord.EmbedBuilder()
            .setTitle('Successfully Skipped!')
            .setDescription(`${client.emotes.success} | Skipped! Now playing:\n${song.name}`)
            .setFooter({ text: 'Made By Milk#5173'})
            .setColor('#a560a4')
        ]
      })
    } catch (e) {
      message.channel.send({
        embeds: [
          new Discord.EmbedBuilder()
            .setTitle('Uh Oh!')
            .setDescription(`${client.emotes.error} |${e}`)
            .setFooter({ text: 'Made By Milk#5173'})
            .setColor('#a560a4')
        ]
      })
    }
  }
}
