const Discord = require('discord.js')

module.exports = {
  name: 'skipto',
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
      return mmessage.channel.send({
      embeds: [
        new Discord.EmbedBuilder()
          .setTitle('Uh Oh!')
          .setDescription(`${client.emotes.error} | Please provide time (in seconds) to go rewind!`)
          .setFooter({ text: 'Made By Milk#5173'})
          .setColor('#a560a4')
      ]
    })
    }
    const num = Number(args[0])
    if (isNaN(num)) return message.channel.send({
      embeds: [
        new Discord.EmbedBuilder()
          .setTitle('Invalid Number!')
          .setDescription(`${client.emotes.error} | Please enter a valid number!`)
          .setFooter({ text: 'Made By Milk#5173'})
          .setColor('#a560a4')
      ]
    })
    await client.distube.jump(message, num).then(song => {
     message.channel.send({
      embeds: [
        new Discord.EmbedBuilder()
          .setTitle('Successfully Skipped!')
          .setDescription(`${client.emotes.success} | Skipped to: ${song.name}!`)
          .setFooter({ text: 'Made By Milk#5173'})
          .setColor('#a560a4')
      ]
    })
    })
  }
}
