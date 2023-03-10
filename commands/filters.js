const Discord = require('discord.js')

module.exports = {
  name: 'filter',
  aliases: ['filters'],
  inVoiceChannel: true,
  run: async (client, message, args) => {
    const queue = client.distube.getQueue(message)
    if (!queue) return message.channel.send({
      embeds: [
        new Discord.EmbedBuilder() 
          .setTitle('Error!') 
          .setDescription(`${client.emotes.error} | There is nothing in the queue right now!`)
          .setFooter({ text: 'Made By Milk#5173'})
          .setColor('#a560a4')
      ]})
    const filter = args[0]
    if (filter === 'off' && queue.filters.size) queue.filters.clear()
    else if (Object.keys(client.distube.filters).includes(filter)) {
      if (queue.filters.has(filter)) queue.filters.remove(filter)
      else queue.filters.add(filter)
    } else if (args[0]) return message.channel.send({
      embeds: [
        new Discord.EmbedBuilder() 
          .setTitle('Error!')
          .setDescription(`${client.emotes.error} | Not a valid filter`)
          .setFooter({ text: 'Made By Milk#5173'})
          .setColor('#a560a4')
      ]})
    message.channel.send({
      embeds: [
        new Discord.EmbedBuilder() 
          .setTitle('Successfully Filtered')
          .setDescription(`Current Queue Filter: \`${queue.filters.names.join(', ') || 'Off'}\``)
          .setFooter({ text: 'Made By Milk#5173'})
          .setColor('#a560a4')
      ]})
  }
}


