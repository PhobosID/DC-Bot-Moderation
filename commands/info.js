const { EmbedBuilder } = require('discord.js');
module.exports = {
    name: 'info',
    description: "Fetch the Information for this Bot.",
    
    async execute({ client, inter }) {
        
        let totalSeconds = (client.uptime / 1000);
        let days = Math.floor(totalSeconds / 86400);
        totalSeconds %= 86400;
        let hours = Math.floor(totalSeconds / 3600);
        totalSeconds %= 3600;
        let minutes = Math.floor(totalSeconds / 60);
        let seconds = Math.floor(totalSeconds % 60);

        const embed = new EmbedBuilder()
        .setColor('#2B2D31')
        .setTitle('Bot Information')
        .addFields(
            {
                name: "Number of Bot Users",
                value: `${client.users.cache.size} user.`,
                inline: true
            },
            {
                name: "Number of Bot on the Server",
                value: `${client.guilds.cache.size} server.`,
                inline: true
            },
            {
                name: "Latency",
                value: `${inter.client.ws.ping} ms.`,
                inline: true
            },
            {
                name: "Uptime",
                value: `${days} days, ${hours} hours, ${minutes} minutes, and ${seconds} seconds.`
            }
        );
        inter.reply({ embeds: [ embed ] })
    },
};