const { ApplicationCommandOptionType, AttachmentBuilder, EmbedBuilder } = require('discord.js');
const Canvas = require('canvas');
const config = require("../config");

client.on('guildMemberAdd', async (member) => {
  const channel = member.guild.channels.cache.get(client.config.app.WelcomeChannel);
  if(!member.guild) return;
      Canvas.registerFont('font.ttf', { family: 'Font' })
      const canvas = Canvas.createCanvas(1772, 633);
      const ctx = canvas.getContext('2d');
      const background = await Canvas.loadImage(`image.png`);

      ctx.drawImage(background, 0, 0, canvas.width, canvas.height);
      ctx.strokeStyle = '#f2f2f2';
      ctx.strokeRect(0, 0, canvas.width, canvas.height);

      var textString3 = `${member.user.username}#${member.user.discriminator}`;
      if (textString3.length >= 14) {
        ctx.font = 'bold 90px "Font"';
        ctx.fillStyle = '#f2f2f2';
        ctx.fillText(textString3, 720, canvas.height / 2 + 15);
      } else {
        ctx.font = 'bold 120px "Font"';
        ctx.fillStyle = '#f2f2f2';
        ctx.fillText(textString3, 720, canvas.height / 2 + 15);
      }

      var textString4 = `You are the ${member.guild.memberCount}th Member!`;
      ctx.font = 'bold 48px "Font"';
      ctx.fillStyle = '#f2f2f2';
      ctx.fillText(textString4, 750, canvas.height / 2 + 125);

      var textString4 = `WELCOME`;
      ctx.font = 'bold 60px "Font"';
      ctx.fillStyle = '#f2f2f2';
      ctx.fillText(textString4, 700, canvas.height / 2 - 150);

      ctx.beginPath();
      ctx.arc(315, canvas.height / 2, 250, 0, Math.PI * 2, true);
      ctx.closePath();
      ctx.clip();

      const avatar = await Canvas.loadImage(member.user.displayAvatarURL({ extension: 'jpg' }));
      ctx.drawImage(avatar, 65, canvas.height / 2 - 250, 500, 500);

      const welcomeimage = new AttachmentBuilder(canvas.toBuffer(), { name: 'welcome-image.png' });
      const welcomeembed = new EmbedBuilder()
      	.setTitle(`Welcome to ${member.guild.name}!`)
      	.setImage(`attachment://welcome-image.png`)
        .setDescription(`Hello 🎉 **${member.user}** ✨\n📜 [Click Here](https://example.com/insert-your-rules-channel-link-here) to Read the Rules!\n🗣️ [Click Here](https://example.com/insert-your-general-channel-link-here) to Start Socialize!`)
        .setColor('#2B2D31');
      channel.send({ embeds: [welcomeembed], files: [welcomeimage] });
    let welcomerole = member.guild.roles.cache.get(client.config.app.WelcomeRole);
    try {
        await member.roles.add(welcomerole);
    } catch (error) {
        console.log("Error assigning role: ", error);
    }
});

client.on('guildMemberRemove', async (member) => {
  const channel = member.guild.channels.cache.get(client.config.app.GoodbyeChannel);
  if (!channel) return;
  	  Canvas.registerFont('font.ttf', { family: 'Font' })
      const canvas = Canvas.createCanvas(1772, 633);
      const ctx = canvas.getContext('2d');
      const background = await Canvas.loadImage(`image.png`);

      ctx.drawImage(background, 0, 0, canvas.width, canvas.height);
      ctx.strokeStyle = '#f2f2f2';
      ctx.strokeRect(0, 0, canvas.width, canvas.height);

      var textString3 = `${member.user.username}#${member.user.discriminator}`;
      if (textString3.length >= 14) {
        ctx.font = 'bold 90px "Font"';
        ctx.fillStyle = '#f2f2f2';
        ctx.fillText(textString3, 720, canvas.height / 2 + 15);
      } else {
        ctx.font = 'bold 120px "Font"';
        ctx.fillStyle = '#f2f2f2';
        ctx.fillText(textString3, 720, canvas.height / 2 + 15);
      }

      var textString4 = `We are sorry to see you go!`;
      ctx.font = 'bold 48px "Font"';
      ctx.fillStyle = '#f2f2f2';
      ctx.fillText(textString4, 750, canvas.height / 2 + 125);

      var textString4 = `GOODBYE`;
      ctx.font = 'bold 60px "Font"';
      ctx.fillStyle = '#f2f2f2';
      ctx.fillText(textString4, 700, canvas.height / 2 - 150);

      ctx.beginPath();
      ctx.arc(315, canvas.height / 2, 250, 0, Math.PI * 2, true);
      ctx.closePath();
      ctx.clip();

      const avatar = await Canvas.loadImage(member.user.displayAvatarURL({ extension: 'jpg' }));
      ctx.drawImage(avatar, 65, canvas.height / 2 - 250, 500, 500);

      const goodbyeimage = new AttachmentBuilder(canvas.toBuffer(), { name: 'goodbye-image.png' });
      const goodbyeembed = new EmbedBuilder()
      	.setTitle(`We are Sorry to See you Go!`)
      	.setImage(`attachment://goodbye-image.png`)
        .setDescription(`Goodbye 👋 **${member.user}** 🚀\n✨ We hope to see you again!`)
        .setColor('#2B2D31');
      channel.send({ embeds: [goodbyeembed], files: [goodbyeimage] });
});

client.on("messageCreate", async (message) => {
    const discordLink =
        /(https?:\/\/)?(www\.)?(discord\.(gg|io|me|li)|discord(app)?\.com\/invite)\/.+[a-z]/i;
    if (discordLink.test(message.content)) {
        try {
            await message.delete();
            const embed = new EmbedBuilder()
                .setColor("#2B2D31")
                .setTitle("DISCORD INVITE LINK DETECTED!")
                .setDescription(
                    `You've Sent a Discord Invite Link ${message.author}. Server Promotion is strictly forbidden here. Don't do it again.`,
                );
            message.channel.send({ embeds: [embed], ephemeral: true });
        } catch (error) {
            const embed = new EmbedBuilder()
                .setColor("#2B2D31")
                .setDescription(
                    'Sorry, I do not have sufficient permission to delete the Invite Link. Please set my role to "Administrator". Thank you!',
                );
            await message.channel.send({ embeds: [embed], ephemeral: true });
        }
    }
});

client.on("messageUpdate", async (oldMessage, newMessage) => {
    if (newMessage.author.bot || !newMessage.guild) return;

    const discordLink =
        /(https?:\/\/)?(www\.)?(discord\.(gg|io|me|li)|discord(app)?\.com\/invite)\/.+[a-z]/i;
    if (discordLink.test(newMessage.content)) {
        try {
            await newMessage.delete();
            const embed = new EmbedBuilder()
                .setColor("#2B2D31")
                .setTitle("DISCORD INVITE LINK DETECTED!")
                .setDescription(
                    `Did you just edited Normal Messages into Invite link, in order to bypass the detection ${newMessage.author}? Nice try.`,
                );
            await newMessage.channel.send({ embeds: [embed], ephemeral: true });
        } catch (err) {
            console.error(err);
        }
    }
});