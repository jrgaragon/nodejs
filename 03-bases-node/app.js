const { crearArchivo } = require('./multiplicar/miltiplicar')

let base = 5;

crearArchivo(base).then(file => console.log(file)).catch(err => { console.log(err) })