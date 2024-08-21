const { EmbedBuilder, InteractionType } = require('discord.js');

module.exports = (client, inter) => {
    if (inter.type === InteractionType.ApplicationCommand) {
        const command = client.commands.get(inter.commandName);

    if (!command) return inter.reply({ embeds: [ new EmbedBuilder().setColor('#2B2D31').setTitle('Whoopsie! An Error Occured!').setDescription('Looks Like We Have Encountered an Error. Please contact Server Owner ASAP!')], ephemeral: true, }), client.slash.delete(inter.commandName)
    if (command.permissions && !inter.member.permissions.has(command.permissions)) return inter.reply({ embeds: [ new EmbedBuilder().setColor('#2B2D31').setTitle('Whoopsie! An Error Occured!').setDescription('Looks Like you do not have a sufficient Permission to execute this Command!')], ephemeral: true, })
        
        command.execute({ inter, client });
    }
};