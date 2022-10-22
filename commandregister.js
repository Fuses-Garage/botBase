const { Client, ClientApplication } = require("discord.js");
/**
 * 
 * @param {Client} client 
 * @param {import("discord.js").ApplicationCommandData[]} commands 
 * @param {import("discord.js").Snowflake} guildID 
 * @returns {Promise<import("@discordjs/collection").Collection<string,import("discord.js").ApplicationCommand>>}
 */
async function register(client, commands, guildID) {
	if (guildID == null) {
		return client.application.commands.set(commands);
	}
	return client.application.commands.set(commands, guildID);
}
const ping = {
	name: "ping",
	description: "pong!",
};
const hello = {
	name: "hello",
	description: "botがあなたに挨拶します。",
	options: [
		{
			type: "STRING",
			name: "language",
			description: "どの言語で挨拶するか指定します。",
			required: true,
			choices: [
				{
					name: "English",
					value: "en"
				},
				{
					name: "Japanese",
					value: "ja"
				}
			],
		}
	]
};

const commands = [ping, hello];
async function main(client) {
	const data = [{
        name: "ping",
        description: "Replies with Pong!",
    }];
    await client.application.commands.set(data, 'server_id');
    console.log("Ready!");
}
main().catch(err => console.error(err));
module.exports = main;