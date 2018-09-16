const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar');
const argv = require('./config/yargs').argv;
const colors = require('colors');

let command = argv._[0];

switch (command) {
    case 'listar':
        listarTabla(argv.base, argv.limite)
            .then(file => {})
            .catch(err => { console.log(err) });
        break
    case 'crear':
        crearArchivo(argv.base, argv.limite)
            .then(file => console.log(colors.green(file)))
            .catch(err => { console.log(err) });
        break;
}