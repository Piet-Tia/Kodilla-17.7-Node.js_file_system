const OSinfo = require('./modules/OSinfo');

process.stdin.setEncoding('utf-8');

process.stdin.on('readable', function() {
	// metoda .read() ma za zadanie odczytać co użytkownik podał na wejściu
	const input = process.stdin.read();
	if(input !== null) {
		const instruction = input.toString().trim();
		switch (instruction) {
			case '/exit':
				process.stdout.write('Quitting app!\n');
				process.exit();
				break;
			case '/showinfo':
				const nodeVersion = process.versions.node;
				const userLanguage = process.env.LANG;
				process.stdout.write('\r\nNode Version: ' + nodeVersion + '\r\nYour language: ' + userLanguage);
				break;
			case '/getOSinfo':
				OSinfo.print();
				break;
			default:
				process.stderr.write('Wrong instruction!');
		}
	}
});

