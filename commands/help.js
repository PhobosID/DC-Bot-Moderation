const { EmbedBuilder } = require('discord.js');
module.exports = {
    name: 'help',
    description: "List of available Bot Commands.",
    showHelp: false,

    execute({ client, inter }) {
        const embed = new EmbedBuilder()
        .setColor('#2B2D31')
        .setDescription('### ⚙️ General Command\n``/help`` - All Available Commands\n``/ping`` - The Bot Latency\n``/info`` - Information About The Bot\n\n### 🔧 Administrator Command\n``/purge`` - Bulk Delete Messages\n``/mute`` - Mutes a Member\n``/unmute`` - Unmutes a Member\n``/kick`` - Kicks a Member\n``/ban`` - Bans a Member\n``/unban`` - Unbans a Member');
        inter.reply({ embeds: [embed] });
    },
};