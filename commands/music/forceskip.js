exports.run = async(client, msg, args) => {	
	const queue = client.queue;
	const serverQueue = queue.get(msg.guild.id);
	if (!msg.member.voiceChannel) return msg.channel.send('You are not in a voice channel, please join a voice channel to play music!');
	if (!serverQueue) return msg.channel.send('There is nothing playing that I could skip for you.');
	await serverQueue.connection.dispatcher.end();
	return undefined;
};

exports.conf = {
	enabled: true,
	guildOnly: true,
	aliases: [],
    userpermissions: ['MANAGE_GUILD']
};
exports.help = {
	name: 'forceskip',
	description: 'Forces the bot to skip the current song without a poll!',
	usage: 'forceskip',
	example: ['forceskip'],
	category: 'music',
    botpermissions: ['ADMINISTRATOR', 'SEND_MESSAGES', 'SPEAK']
};
