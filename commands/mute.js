const { ApplicationCommandOptionType, PermissionsBitField, EmbedBuilder } = require('discord.js');
module.exports = {
  name: 'mute',
  description: 'Mute a Specific Member in the Server',
  dm_permission: false,
  permissions: PermissionsBitField.Flags.ManageRoles,
  options: [
    {
      name: 'user',
      description: 'User to Mute.',
      type: ApplicationCommandOptionType.User,
      required: true,
    },
  ],
  async execute({ client, inter }) {
    const user = inter.options.getUser('user');
    const guild = inter.guild;
    const member = await guild.members.fetch(user.id);
    const mutedRole = guild.roles.cache.get('ROLE_ID'); //Insert your Role ID for Muted Role
    if (member.roles.cache.has(mutedRole.id)) {
      const NotMuted = new EmbedBuilder()
      .setTitle('Whoopsie! An Error Occured!')
      .setDescription('Looks Like the User you had chose is already Muted. Please try again!')
      .setColor('#2B2D31')
      return inter.reply({ embeds:[NotMuted], ephemeral: true });
    } 
    if (member.permissions.has(PermissionsBitField.Flags.Administrator)) {
        const Immune = new EmbedBuilder()
        .setTitle('Whoopsie! An Error Occured!')
        .setDescription('Looks Like the User you chose is cannot be Muted. Please try again!')
        .setColor('#2B2D31')
      	return inter.reply({ embeds:[Immune], ephemeral: true });
    }
    if (!inter.member.permissions.has(PermissionsBitField.Flags.ManageRoles)) {
      	const NoPerm = new EmbedBuilder()
      	.setTitle('Whoopsie! An Error Occured!')
      	.setDescription('Looks Like you do not have a sufficient Permission to execute this Command!')
      	.setColor('#2B2D31')
      	return inter.reply({ embeds:[NoPerm], ephemeral: true });
        } try {
      await member.roles.add(mutedRole);
      const Muted = new EmbedBuilder()
      .setTitle('Command Successfully Executed!')
      .setDescription(`Success! ${member.user} has been Muted`)
      .setColor('#2B2D31')
      return inter.reply({ embeds:[Muted], ephemeral: true });
    } catch (error) {
      const ErrorOccured = new EmbedBuilder()
      .setTitle('Whoopsie! An Error Occured!')
      .setDescription('Looks Like Something just went Wrong! Please Try Again.')
      .setColor('#2B2D31')
      return inter.reply({ embeds:[ErrorOccured], ephemeral: true });
    }
  },
};