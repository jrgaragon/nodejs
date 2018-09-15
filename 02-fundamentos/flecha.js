// function sumar(a, b) {
//     return a + b;
// }

// let sumar = (a, b) => {
//     return a + b;
// };

// let saludar = () => 'Hola Mundo';

// console.log(saludar());

let deadpool = {
    self: this,
    nombre: 'Wade',
    apellido: 'Winston',
    poder: 'Regeneracion',
    getNombre: function() {
        return `${this.nombre} ${this.apellido} - Poder: ${this.poder}`
    }
}

console.log(deadpool.getNombre());