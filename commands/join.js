const { Constants } = require('discord.js')
const Discord = require('discord.js')

module.exports = {
  name: 'join',
  aliases: ['move'],
  run: async (client, message, args) => {
    let voiceChannel = message.member.voice.channel
    if (args[0]) {
      voiceChannel = await client.channels.fetch(args[0])
      if (!Constants.VoiceBasedChannelTypes.includes(voiceChannel?.type)) {
        return message.channel.send({
          embeds: [
            new Discord.EmbedBuilder() 
              .setTitle('Error!') 
              .setDescription(`${client.emotes.error} | ${args[0]} is not a valid voice channel!`)
              .setFooter({ text: 'Made By Milk#5173'})
              .setColor('#a560a4')
          ]})
      }
    }
    if (!voiceChannel) {
      return message.channel.send({
        embeds: [
          new Discord.EmbedBuilder() 
            .setTitle('Error!') 
            .setDescription(`${client.emotes.error} | You must be in a voice channel or enter a voice channel id!`)
            .setFooter({ text: 'Made By Milk#5173'})
            .setColor('#a560a4')
        ]})
    }
    client.distube.voices.join(voiceChannel)
    message.channel.send({
      embeds: [
        new Discord.EmbedBuilder() 
          .setTitle('Mr. Boombastic Has Joined!') 
          .setDescription(`${client.emotes.success} | I have joined your vc!`)
          .setFooter({ text: 'Made By Milk#5173'})
          .setColor('#a560a4')
      ]})
  }
}
