const fs = require('fs');

fs.readdir('./','utf-8',function(err, data){
	if (err) throw err;
	const dirList = data;
	fs.writeFile('./directoryContent.txt', dirList, function() {
		console.log('The file has been saved!');
	});
});


/*

const os = require('os');
const colors = require('colors');
const EOL = os.EOL;

fs.readFile('./tekst.txt', 'utf-8', function(err, data) {
    console.log('Dane przed zapisem!'.blue);
    console.log(data);
    fs.appendFile('./tekst.txt', EOL + 'A tak wyglądają po zapisie!', function(err) {
        if (err) throw err;
        console.log('Zapisano!'.blue);
        fs.readFile('./tekst.txt', 'utf-8', function(err, data) {
            console.log('Dane po zapisie'.blue)
            console.log(data);
        });
    });
});

var StatMode = require('stat-mode');

fs.stat('./cat.jpg', function(err, stats) {
    var statMode = new StatMode(stats);
    console.log(statMode.toString());
});

*/