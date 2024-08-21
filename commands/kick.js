const { ApplicationCommandOptionType, PermissionsBitField, EmbedBuilder } = require('discord.js');
module.exports = {
    name: 'kick',
    description: 'Kick a Specific Member from the Server',
    dm_permission: false,
    permissions: PermissionsBitField.Flags.KickMembers,
    options: [{
        name: 'user',
        description: 'User to Kick.',
        type: ApplicationCommandOptionType.User,
        required: true,
    }, ],
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
        if (!inter.member.permissions.has(PermissionsBitField.Flags.KickMembers)) {
      	const NoPerm = new EmbedBuilder()
      	.setTitle('Whoopsie! An Error Occured!')
      	.setDescription('Looks Like you do not have a sufficient Permission to execute this Command!')
      	.setColor('#2B2D31')
      	return inter.reply({ embeds:[NoPerm], ephemeral: true });
        }
        if (!member.kickable) {
        const NotKickable = new EmbedBuilder()
      	.setTitle('Whoopsie! An Error Occured!')
      	.setDescription('Looks Like the User you chose is not Kickable. Please try again!')
      	.setColor('#2B2D31')
      	return inter.reply({ embeds:[NotKickable], ephemeral: true });
        }
        await member.kick();
        const Kicked = new EmbedBuilder()
      	.setTitle('Command Successfully Executed!')
      	.setDescription(`Success! ${member.user} has been Kicked from ${member.guild.name}.`)
      	.setColor('#2B2D31')
      	return inter.reply({ embeds:[Kicked], ephemeral: true });
    }
};