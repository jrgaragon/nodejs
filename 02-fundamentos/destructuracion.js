let deadpool = {
    nombre: 'Wade',
    apellido: 'Winston',
    poder: 'Regeneracion',
    getNombre: function() {
        return `${this.nombre} ${this.apellido} - Poder: ${this.poder}`
    }
}

// console.log(deadpool.getNombre());

let { nombre: primerNombre, apellido, poder } = deadpool;

console.log(primerNombre, apellido, poder);