
# DC-Bot-Moderation
![Header](https://static.cdn.phobos.id/assets/project/dc-bot-moderation/header.jpg)

Simple Moderation Discord Bot for your discord server built in JavaScript (Node.js) using Yarn and Discord.js v14 Libraries.

<p align="center">
<img src="https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E">
<img src="https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white">ㅤㅤ
<img src="https://img.shields.io/badge/yarn-%232C8EBB.svg?style=for-the-badge&logo=yarn&logoColor=white">ㅤㅤ<br>
<img src="https://img.shields.io/badge/Maintenated-No-red.svg?style=for-the-badge">ㅤㅤ
<img src="https://img.shields.io/badge/Pull_Request-No-red.svg?style=for-the-badge">
</p>

## Files to Modify
The Files you might need to Modify are:
- ``config.js`` - Modify your Bot Token, Presences, and more
- ``src/events.js`` - Modify your Welcome Channel ID, Goodbye Channel ID, and Welcome Role ID
- ``commands/mute.js`` - Modify your Muted Role ID
- ``commands/unmute.js`` - Modify your Muted Role ID

To get Role ID and Channel ID, one must enable Developer mode in Discord Settings, then Right-Click the Role or Channel, then Copy ID.

## Dependencies
All can be installed at once through ``yarn install`` if the ``package.json`` file exist.
- Discord.js 14.14.1
- MS 2.1.3
- Canvas 2.11.2

Environment used: Node.js v16
## Features

- Purge Messages
- Kick Members
- Ban/Unban Members
- Mute/Unmute Members
- Automatic Delete of Discord Invite Link

## Deployment

To deploy the Discord Bot. First to get your Bot Token at [Discord Developer Portal](https://discord.com/developers). Then, don't forget to fill your Config Files.

Upload all necessary files into your Hosting. Then Install all the dependencies as shown in the ``package.json`` files.

You can use npm for package manager, but I recommend you to use yarn, as it was faster (In my Opinion)

```bash
  yarn install
```
The next one will be executing the main index file
```bash
  node index.js
```
And you're done. Enjoy the moderation discord bot!

## Screenshots

![Welcome Images](https://static.cdn.phobos.id/assets/project/dc-bot-moderation/welcome.jpg)

![Goodbye Images](https://static.cdn.phobos.id/assets/project/dc-bot-moderation/goodbye.jpg)

![Anti-Invite Link](https://static.cdn.phobos.id/assets/project/dc-bot-moderation/detection.jpg)

## Related

The Welcome/Goodbye Image is a modified form of [Discord Welcome Images](https://github.com/Tomato6966/Discord-Welcome-Images/tree/main) by Tomato6966 (The Original Repository was still in Discord.js v13. I modify a little bit to support Discord.js v14) 

This Bot also can be paired with [Discord Music Bot](https://github.com/ZerioDev/Music-bot) by ZerioDev. If You do like had Music Bot with an Ability of Moderation and Greeting Members, Just merge the command project and move all of commands in this repository files into their repository: ``commands/main``. Dont Forget to merge ``src/events.js`` as well.


