module.exports = async (client) => {
    console.log(`Successfully Logged in as client ${client.user.username}\n-> Serving on ${client.guilds.cache.size} servers for a total of ${client.users.cache.size} users`);
    client.user.setActivity(client.config.app.playing);   
};