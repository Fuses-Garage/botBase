const { exec } = require('child_process')//再起動に必要だよ
const token = process.env['BOTTOKEN']//トークンを取得するよ
const keepAlive = require("./server.js")//24時間稼働に必要だよ
const log = require("./login.js")//24時間稼働に必要だよ
const { Client, GatewayIntentBits, SharedSlashCommandOptions, Guild, inlineCode } = require("discord.js");//discord.jsを読み込むよ
const client = new Client({
	intents: Object.values(GatewayIntentBits).reduce((a, b) => a | b)
});//クライアントを生成するよ
if(token!=null){//トークンが設定されてたら

	(async () => { // ログイン処理を行うよ
		const re=await log(client)
			.catch((e) => {//タイムアウトしたら
	    	    exec("kill 1")//再起動するよ
	    	});
	})()
} 
client.once('ready', () => {//ログイン出来たら
	console.log('Ready!');//コンソールにメッセージ
	client.user.setActivity('!edumaid')//アクティビティを設定するよ
});
keepAlive();//webサーバーを建てるよ