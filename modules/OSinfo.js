const os = require('os');
const colors = require('colors/safe');
const systemUptime = require('./systemUptime');


function getOSinfo() {
	let type = os.type();
	if(type === 'Darwin') {
		type = 'OSX';
	} else if(type === 'Windows_NT') {
		type = 'Windows';
	}
	const release = os.release();
	const cpu = os.cpus()[0].model;
	const userInfo = os.userInfo();
	console.log(colors.gray('System: '), type);
	console.log(colors.red('Release: '), release);
	console.log(colors.blue('CPU model: '), cpu);
	console.log(colors.green('Uptime: '), systemUptime.print());
	console.log(colors.yellow('User name: '), userInfo.username);
	console.log('Home dir: ', userInfo.homedir);
}

exports.print = getOSinfo;