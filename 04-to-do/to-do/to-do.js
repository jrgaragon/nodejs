const fs = require('fs');

let todo = [];

const crear = (desc) => {
    load()
    let porHacer = {
        descripcion: desc,
        completado: false
    }

    todo.push(porHacer);
    save();

    return porHacer;
}

const listar = () => {
    load();
    return todo;
};

const load = () => {
    try {
        todo = require('../db/data.json');
    } catch (error) {
        todo = [];
    }
};

const save = () => {
    let data = JSON.stringify(todo);

    fs.writeFile('db/data.json', data, (err) => {
        if (err) {
            throw err;
        }
    });
};

module.exports = {
    crear,
    listar
}