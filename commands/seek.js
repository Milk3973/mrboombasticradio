const Discord = require('discord.js')

module.exports = {
  name: 'seek',
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
            .setTitle('Error!')
            .setDescription(`${client.emotes.error} | Please provide position (in seconds) to seek!`)
            .setFooter({ text: 'Made By Milk#5173'})
            .setColor('#a560a4')
        ]
      })
    }
    const time = Number(args[0])
    if (isNaN(time)) return message.channel.send({
      embeds: [
        new Discord.EmbedBuilder()
          .setTitle('Invalid Number!')
          .setDescription(`${client.emotes.error} | Please enter a valid number!`)
          .setFooter({ text: 'Made By Milk#5173'})
          .setColor('#a560a4')
      ]
    })
    queue.seek(time)
    message.channel.send({
      embeds: [
        new Discord.EmbedBuilder()
          .setTitle('Successfully Seeked!')
          .setDescription(`${client.emotes.success} | Successfully Seeked to ${time}!`)
          .setFooter({ text: 'Made By Milk#5173'})
          .setColor('#a560a4')
      ]
    })
  }
}
