const optsCreate = {
    descripcion: {
        demand: true,
        alias: 'd'
    }
}
const optsUpdate = {
    descripcion: {
        demand: true,
        alias: 'd'
    },
    completado: {
        alias: 'c',
        default: true
    }
}

const argv = require('yargs')
    .command('crear', 'Crea un elemento', optsCreate)
    .command('actualizar', 'Actualiza el estado completado', optsUpdate)
    .command('borrar', 'Borrar un elemento', optsCreate)
    .help()
    .argv;

module.exports = {
    argv
}