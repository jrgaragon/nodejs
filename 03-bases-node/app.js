const fs = require('fs');

let base = 5;
let data = '';

for (let i = 1; i <= 10; i++) {
    data += `${base} * ${i} = ${i*base}\n`;
}

fs.writeFile(`tabla-${base}.txt`, data, (err) => {
    if (err) throw err;
    console.log('The file has been saved!');
});