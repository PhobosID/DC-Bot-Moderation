const { readdirSync } = require('fs');
const { Collection } = require('discord.js');
client.commands = new Collection();
CommandsArray = [];

const events = readdirSync('./events/').filter(file => file.endsWith('.js'));
console.log(`Loading events...`);
for (const file of events) {
    const event = require(`../events/${file}`);
    console.log(`-> [Loaded Event] ${file.split('.')[0]}`);
    client.on(file.split('.')[0], event.bind(null, client));
    delete require.cache[require.resolve(`../events/${file}`)];
}; 

console.log(`Loading commands...`);
const commands = readdirSync('./commands/').filter(files => files.endsWith('.js'));
for (const file of commands) {
    const command = require(`../commands/${file}`);
    if (command.name && command.description) {
        CommandsArray.push(command);
        console.log(`-> [Loaded Command] ${command.name.toLowerCase()}`);
        client.commands.set(command.name.toLowerCase(), command);
        delete require.cache[require.resolve(`../commands/${file}`)];
    } else console.log(`[Failed Command]  ${command.name.toLowerCase()}`)
};

client.on('ready', (client) => {
 if (client.config.app.global) client.application.commands.set(CommandsArray)
  else client.guilds.cache.get(client.config.app.guild).commands.set(CommandsArray)
})