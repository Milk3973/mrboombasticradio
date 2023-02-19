const Discord = require('discord.js')

module.exports = {
  name: 'play',
  aliases: ['p'],
  inVoiceChannel: true,
  run: async (client, message, args) => {
    const string = args.join(' ')
    if (!string) return message.channel.send({
      embeds: [
        new Discord.EmbedBuilder()
          .setTitle('Error!')
          .setDescription(`${client.emotes.error} | Please enter a song url or query to search.`)
          .setFooter({ text: 'Made By Milk#5173'})
          .setColor('#a560a4')
      ]
    })
    client.distube.play(message.member.voice.channel, string, {
      member: message.member,
      textChannel: message.channel,
      message
    })
  }
}
