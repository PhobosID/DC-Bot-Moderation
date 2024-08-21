const { ApplicationCommandOptionType, PermissionsBitField, EmbedBuilder } = require('discord.js');
module.exports = {
  name: 'unban',
  description: 'Unban a Specific Member in the Server',
  dm_permission: false,
  permissions: PermissionsBitField.Flags.BanMembers,
  options: [
    {
      name: 'id',
      description: 'User ID to Unban.',
      type: ApplicationCommandOptionType.String,
      required: true,
    },
  ],
 
  async execute({ client, inter }) {
    const userid = inter.options.getString('id');
    const guild = inter.guild;
    const banned = await guild.bans.fetch(userid).catch(() => null);
    if (!banned) {
      const NotBanned = new EmbedBuilder()
      .setTitle('Whoopsie! An Error Occured!')
      .setDescription('Either the User ID is Invalid, Contain Letters, or Simply the User is Not Banned Here. Please try again!')
      .setColor('#2B2D31')
      return inter.reply({ embeds:[NotBanned], ephemeral: true });
    } 
    if (!inter.member.permissions.has(PermissionsBitField.Flags.BanMembers)) {
      	const NoPerm = new EmbedBuilder()
      	.setTitle('Whoopsie! An Error Occured!')
      	.setDescription('Looks Like you do not have a sufficient Permission to execute this Command!')
      	.setColor('#2B2D31')
      	return inter.reply({ embeds:[NoPerm], ephemeral: true });
        } try {
      await inter.guild.bans.remove(userid);
      const Unbanned = new EmbedBuilder()
      .setTitle('Command Successfully Executed!')
      .setDescription(`Success! User ID **${userid}** has been Unbanned.`)
      .setColor('#2B2D31')
      return inter.reply({ embeds:[Unbanned], ephemeral: true });
    } catch (error) {
      const ErrorOccured = new EmbedBuilder()
      .setTitle('Whoopsie! An Error Occured!')
      .setDescription('Looks Like Something just went Wrong! Please Try Again.')
      .setColor('#2B2D31')
      return inter.reply({ embeds:[ErrorOccured], ephemeral: true });
    }
  },
};