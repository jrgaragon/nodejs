const fs = require('fs');

let crearArchivo = async(base) => {
    let data = '';

    if (!Number(base)) {
        throw new Error('No es un numero');
    }

    for (let i = 1; i <= 10; i++) {
        data += `${base} * ${i} = ${i * base}\n`;
    }

    fs.writeFile(`tabla-${base}.txt`, data, (err) => {
        if (err) {
            throw err;
        }
    });
    return `tabla-${base}.txt`;
};

module.exports = {
    crearArchivo
};