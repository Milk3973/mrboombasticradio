const Discord = require('discord.js')

module.exports = {
  name: 'volume',
  aliases: ['v', 'set', 'set-volume'],
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
    const volume = parseInt(args[0])
    if (isNaN(volume)) return message.channel.send({
      embeds: [
        new Discord.EmbedBuilder()
          .setTitle('Invalid Number!')
          .setDescription(`${client.emotes.error} | Please enter a valid number!`)
          .setFooter({ text: 'Made By Milk#5173'})
          .setColor('#a560a4')
      ]
    })
    queue.setVolume(volume)
    message.channel.send({
      embeds: [
        new Discord.EmbedBuilder()
          .setTitle('Successfully Changed Volume!')
          .setDescription(`${client.emotes.success} | Volume set to \`${volume}\``)
          .setFooter({ text: 'Made By Milk#5173'})
          .setColor('#a560a4')
      ]
    })
  }
}
