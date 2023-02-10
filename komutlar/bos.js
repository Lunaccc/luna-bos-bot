const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

exports.run = async (client, message, args) => {

};
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["farklı akrifleştirme komutları"],
  permLevel: 0
};
exports.help = {
  name: 'bos',
  description: 'Komutun Açıklaması.',
  usage: 'bos '
  };
