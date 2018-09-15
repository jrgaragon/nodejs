let empleados = [{
        id: 1,
        nombre: 'Naira'
    },
    {
        id: 2,
        nombre: 'Natalia'
    },
    {
        id: 3,
        nombre: 'Yorch'
    }
];

let salarios = [{
        id: 1,
        salario: 1000
    },
    {
        id: 2,
        salario: 2000
    }
];

let getSalario = (empleado) => {
    return new Promise((resolve, reject) => {
        let salarioDB = salarios.find(salario => salario.id == empleado.id);
        if (!salarioDB) {
            reject(`No se encontro salario para el usuario ${empleado.nombre}`);
        } else {
            resolve({ nombre: empleado.nombre, salario: salarioDB.salario, id: empleado.id });
        }
    });
};


let getEmpleado = (id) => {
    return new Promise((resolve, reject) => {
        let empleadoDB = empleados.find(empleado => empleado.id === id);

        if (!empleadoDB) {
            reject(`No existe un empleado con el ID ${id}`);
        } else {
            resolve(empleadoDB);
        }
    });
};

// getEmpleado(2).then(empleado => {
//     getSalario(empleado).then(salario => console.log(salario), (err) => console.log(err));
// }, (err) => console.log(err));

getEmpleado(3).then(empleado => {
    return getSalario(empleado);
}).then(resp => {
    console.log(resp);
}).catch(err => {
    console.log(err);
});