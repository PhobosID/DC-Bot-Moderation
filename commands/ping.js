const { EmbedBuilder } = require('discord.js');
const ms = require('ms');
module.exports = {
    name: 'ping',
    description: "Shows the Bot Latency.",

    execute({ client, inter }) {
        const embed = new EmbedBuilder()
        .setColor('#2B2D31')
        .setAuthor({ name: '🏓 Pong!', iconURL: client.user.displayAvatarURL({ size: 1024, dynamic: true }) })
        .addFields( 
            { name: `🛰️ Latency:`, value: `${Math.round(client.ws.ping)} ms.`},
            { name: `⌛ Recorded:`, value: `${ms(Date.now() - client.ws.shards.first().lastPingTimestamp, { long: true })} ago.`}
        );
        inter.reply({ embeds: [embed] });
    },
};