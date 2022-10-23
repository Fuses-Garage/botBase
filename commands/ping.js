const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('ping')
		.setDescription('テスト用のコマンドだよ。'),
	async execute(interaction) {
		await interaction.reply('Pong!');
	},
};