let fs = require('fs');

let content = fs.readFileSync(`${__dirname}/data.txt`, 'utf8');
console.log(content);

fs.readFile(`${__dirname}/data.txt`, 'utf8', (err, data) => {
    if (err)
        throw err;
    console.log(data);
});
