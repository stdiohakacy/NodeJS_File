let fs = require('fs');

let readble = fs.createReadStream(`${__dirname}/data1.txt`, {
    encoding: 'utf8',
    highWaterMark: 32 * 1024 // 32KB
});

let writeable = fs.createWriteStream(`${__dirname}/data2.txt`);

readble.on('data', function(chunk) {
    console.log(chunk.length);
    writeable.write(chunk);
});
