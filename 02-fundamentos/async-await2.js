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

let getSalario = async(empleado) => {
    let salarioDB = salarios.find(salario => salario.id == empleado.id);
    if (!salarioDB) {
        throw new Error(`No se encontro salario para el usuario ${empleado.nombre}`);
    } else {
        return {
            nombre: empleado.nombre,
            salario: salarioDB.salario,
            id: empleado.id
        };
    }
};


let getEmpleado = async(id) => {
    let empleadoDB = empleados.find(empleado => empleado.id === id);

    if (!empleadoDB) {
        throw new Error(`No existe un empleado con el ID ${id}`);
    } else {
        return empleadoDB;
    }
};

let getInformacion = async(id) => {
    let empleado = await getEmpleado(id);
    let resp = await getSalario(empleado);
    return `${resp.nombre} salario ${resp.salario}`;
};

getInformacion(2).then(mensaje => console.log(mensaje)).catch(err => console.log(err));