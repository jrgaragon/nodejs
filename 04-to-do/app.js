const argv = require('./config/yargs').argv;
const todo = require('./to-do/to-do');
const colors = require('colors');

let command = argv._[0];

switch (command) {
    case 'crear':
        let tarea = todo.crear(argv.descripcion);
        console.log(tarea);
        break;
    case 'listar':
        for (let tarea of todo.listar()) {
            console.log('========================='.green);
            console.log(tarea.descripcion);
            console.log(`Estado: ${tarea.completado}`);
            console.log('========================='.green);
        }
        break;
    case 'actualizar':
        console.log('actualizar');
        break;
    default:
        console.log('error');
}