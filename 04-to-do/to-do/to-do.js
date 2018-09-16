const fs = require('fs');

let todo = [];

const crear = (desc) => {
    let porHacer = {
        descripcio: desc,
        completado: false
    }

    todo.push(crear);
    return porHacer;
}

const save = () => {
    let data = JSON.stringify(todo);

    fs.writeFile('./db/data.json', data, (err) => {
        if (err) {
            throw err;
        }
    });

};

module.exports = {
    crear
}