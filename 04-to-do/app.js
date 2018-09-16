const argv = require('./config/yargs').argv;
const todo = require('./to-do/to-do');

let command = argv._[0];

switch (command) {
    case 'crear':
        let tarea = todo.crear(argv.descripcion);
        console.log(tarea);
        break;
    case 'listar':
        console.log('listar');
        break;
    case 'actualizar':
        console.log('actualizar');
        break;
    default:
        console.log('error');
}