const argv = require('yargs')
    .command('actualizar', 'actualizar tareas', {
        descripcion: {
            demand: true,
            alias: 'd',
        },
        completado: {
            demand: true,
            default: true,
            alias: 'c'
        }
    })
    .command('crear', 'crear tarea', {
        descripcion: {
            demand: true,
            alias: 'd',
            desc: 'Descripcion de la tarea por hacer'
        }
    })
    .command('listar', 'listar tarea', {
        listar: {
            demand: true,
            alias: 'l',
            desc: 'listar las tareas por hacer'
        }
    })

.help()
    .argv;

module.exports = {
    argv
};