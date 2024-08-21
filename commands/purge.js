const { ApplicationCommandOptionType, PermissionsBitField, EmbedBuilder } = require('discord.js');

module.exports = {
  name: 'purge',
  description: 'Delete Messages on a channel at once.',
  dm_permission: false,
  permissions: PermissionsBitField.Flags.ManageMessages,
  options: [
    {
      name: 'count',
      description: 'Number of Messages to delete (1-100).',
      type: ApplicationCommandOptionType.Integer,
      required: true,
    },
  ],

  async execute({ client, inter }) {
    const amount = inter.options.getInteger('count');

    if (amount < 1 || amount > 100) {
      return inter.reply({
        embeds: [new EmbedBuilder().setColor('#2B2D31').setDescription('❌ You can only enter numbers from 1-100')],
        ephemeral: true,
      });
    }

    try {
      const messages = await inter.channel.messages.fetch({ limit: amount });
      const messagesToDelete = messages.filter(msg => (Date.now() - msg.createdTimestamp) < 14 * 24 * 60 * 60 * 1000);

      if (messagesToDelete.size === 0) {
        return inter.reply({
          embeds: [new EmbedBuilder().setColor('#2B2D31').setDescription('❌ No messages found within the last 14 days that can be deleted.')],
          ephemeral: true,
        });
      }

      await inter.channel.bulkDelete(messagesToDelete, true);

      inter.reply({
        embeds: [new EmbedBuilder().setColor('#2B2D31').setDescription(`🗑️ Successfully deleted **${messagesToDelete.size}** messages!`)],
        ephemeral: true,
      });
    } catch (err) {
      console.error(err);

      if (err.message.includes('You can only bulk delete messages that are under 14 days old.')) {
        return inter.reply({
          embeds: [new EmbedBuilder().setColor('#2B2D31').setDescription('❌ Cannot delete messages older than 14 days.')],
          ephemeral: true,
        });
      }

      inter.reply({
        embeds: [new EmbedBuilder().setColor('#2B2D31').setDescription('❌ An error occurred while trying to delete messages. Please try again later.')],
        ephemeral: true,
      });
    }
  },
};