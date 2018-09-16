const { crearArchivo } = require('./multiplicar/miltiplicar')

let base = 5;

let argv = process.argv;
let parametroBase = argv[2];

crearArchivo(parametroBase).then(file => console.log(file)).catch(err => { console.log(err) });