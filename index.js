const { Client, GatewayIntentBits } = require('discord.js');
const Canvas = require('canvas');

global.client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMembers,
        GatewayIntentBits.GuildPresences,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.GuildVoiceStates,
        GatewayIntentBits.MessageContent,
        GatewayIntentBits.GuildMessageReactions
    ],
   disableMentions: 'everyone',
});

client.config = require('./config');
require('./src/loader');
require('./src/events');

client.login(client.config.app.token);