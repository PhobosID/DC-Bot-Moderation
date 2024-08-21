const { ApplicationCommandOptionType, PermissionsBitField, EmbedBuilder } = require('discord.js');
module.exports = {
  name: 'ban',
  description: 'Ban a specific user from the server',
  dm_permission: false,
  permissions: PermissionsBitField.Flags.BanMembers,
  options: [
    {
      name: 'user',
      description: 'User to ban.',
      type: ApplicationCommandOptionType.User,
      required: true,
    },
  ],
    
  async execute({ client, inter }) {
    const user = inter.options.getUser('user');
    const member = inter.guild.members.resolve(user);
    if (!member) {
      const NotInServer = new EmbedBuilder()
      .setTitle('Whoopsie! An Error Occured!')
      .setDescription('Looks Like the User is not exist, or the User is not in the Server. Please Try Again!')
      .setColor('#2B2D31')
      return inter.reply({ embeds:[NotInServer], ephemeral: true });
    }
    if (!inter.member.permissions.has(PermissionsBitField.Flags.BanMembers)) {
      const NoPerm = new EmbedBuilder()
      .setTitle('Whoopsie! An Error Occured!')
      .setDescription('Looks Like you do not have a sufficient Permission to execute this Command!')
      .setColor('#2B2D31')
      return inter.reply({ embeds:[NoPerm], ephemeral: true });
    }
    if (!member.bannable) {
      const NotBannable = new EmbedBuilder()
      .setTitle('Whoopsie! An Error Occured!')
      .setDescription('Looks Like the User you chose is not Bannable. Please try again!')
      .setColor('#2B2D31')
      return inter.reply({ embeds:[NotBannable], ephemeral: true });
    }
    await member.ban();
    const Banned = new EmbedBuilder()
      .setTitle('Command Successfully Executed!')
      .setDescription(`Success! ${member.user} has been Banned from ${member.guild.name}.`)
      .setColor('#2B2D31')
      return inter.reply({ embeds:[Banned], ephemeral: true });
  }
};