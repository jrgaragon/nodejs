const fs = require('fs');
const colors = require('colors');

let listarTabla = async(base, limite = 10) => {
    if (!Number(base)) {
        throw new Error('base no es un numero');
    }

    if (!Number(limite)) {
        throw new Error('limite no es un numero');
    }

    for (let i = 1; i <= limite; i++) {
        console.log(`${base} * ${i} = ${i * base}`.yellow);
    }
};


let crearArchivo = async(base, limite) => {
    let data = '';

    if (!Number(base)) {
        throw new Error('No es un numero');
    }

    for (let i = 1; i <= limite; i++) {
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
    crearArchivo,
    listarTabla
};